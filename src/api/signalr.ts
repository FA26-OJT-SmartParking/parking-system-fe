import * as signalR from '@microsoft/signalr';
import { API_BASE_URL } from '@/lib/config';

export function createParkingHubConnection(): signalR.HubConnection {
  return new signalR.HubConnectionBuilder()
    .withUrl(`${API_BASE_URL}/hubs/parking`)
    .withAutomaticReconnect()
    .build();
}
