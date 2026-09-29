"use client";

import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/config";

/** Payload of the "slotStatusChanged" event (SlotStatusChanged in the backend contracts). */
export type SlotStatusChanged = {
  lotId: string;
  slotCode: string;
  status: string;
  at: string;
};

export type ConnectionState = "connecting" | "connected" | "disconnected";

/** Latest status per slot code, pushed by the parking service through the gateway hub. */
export function useSlotStatuses() {
  const [statuses, setStatuses] = useState<Record<string, string>>({});
  const [connection, setConnection] = useState<ConnectionState>("connecting");

  useEffect(() => {
    // StrictMode mounts effects twice in development: ignore callbacks from a stopped connection
    let active = true;
    const setState = (state: ConnectionState) => {
      if (active) setConnection(state);
    };

    const hub = new HubConnectionBuilder()
      .withUrl(`${API_BASE_URL}/hubs/parking`)
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Warning)
      .build();

    hub.on("slotStatusChanged", (event: SlotStatusChanged) => {
      if (active) setStatuses((previous) => ({ ...previous, [event.slotCode]: event.status }));
    });
    hub.onreconnecting(() => setState("connecting"));
    hub.onreconnected(() => setState("connected"));
    hub.onclose(() => setState("disconnected"));
    hub.start().then(
      () => setState("connected"),
      () => setState("disconnected"),
    );

    return () => {
      active = false;
      void hub.stop();
    };
  }, []);

  return { statuses, connection };
}
