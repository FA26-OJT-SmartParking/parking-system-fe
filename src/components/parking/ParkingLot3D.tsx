"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { NO_DATA_COLOR, slotColor } from "@/lib/slotColors";

type SlotMesh = THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>;

type Props = {
  slotCodes: string[];
  statuses: Record<string, string>;
};

/** One box per slot in a row, colored by the latest status. */
export function ParkingLot3D({ slotCodes, statuses }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const meshesRef = useRef(new Map<string, SlotMesh>());

  // Build the scene once per slot layout
  useEffect(() => {
    const container = containerRef.current!;
    const meshes = meshesRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 7, 9);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(5, 10, 5);
    scene.add(sun);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(slotCodes.length * 1.3 + 1, 4),
      new THREE.MeshStandardMaterial({ color: 0x374151 }),
    );
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    const slotGeometry = new THREE.BoxGeometry(1, 0.5, 2);
    slotCodes.forEach((code, index) => {
      const mesh: SlotMesh = new THREE.Mesh(slotGeometry, new THREE.MeshStandardMaterial({ color: NO_DATA_COLOR }));
      mesh.position.set((index - (slotCodes.length - 1) / 2) * 1.3, 0.25, 0);
      scene.add(mesh);
      meshes.set(code, mesh);
    });

    const resize = () => {
      const { clientWidth: width, clientHeight: height } = container;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    renderer.setAnimationLoop(() => renderer.render(scene, camera));

    return () => {
      renderer.setAnimationLoop(null);
      observer.disconnect();
      meshes.forEach((mesh) => mesh.material.dispose());
      meshes.clear();
      slotGeometry.dispose();
      ground.geometry.dispose();
      ground.material.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [slotCodes]);

  // Recolor after every status change, and after the scene is rebuilt
  useEffect(() => {
    meshesRef.current.forEach((mesh, code) => {
      mesh.material.color.setHex(slotColor(statuses[code]));
    });
  }, [statuses, slotCodes]);

  return <div ref={containerRef} className="h-[360px] overflow-hidden rounded-xl bg-gray-900" />;
}
