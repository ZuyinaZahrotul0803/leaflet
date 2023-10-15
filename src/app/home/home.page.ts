import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() { }
  //ngOnInit() {
  //}

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([-7.774546997320054, 110.37450206597629], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const markerIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    })

    const marker = L.marker([-7.774546997320054, 110.37450206597629], { icon: markerIcon }).addTo(this.map)
      .bindPopup('Sekolah Vokasi UGM')
      .openPopup();

    // Tambahkan tampilan peta dasar OpenStreetMap
    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    const opentopomapLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: '&copy; <a href="https://opentopomap.org/about.html">OpenTopoMap</a> contributors'
    });
    const googleMapsLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; Google Maps'
    });

    // Buat objek layer control
    const baseMaps = {
      'OpenStreetMap': osmLayer,
      'OpenTopoMap': opentopomapLayer,
      'Google Maps': googleMapsLayer
    };

    // Tambahkan layer control ke peta
    L.control.layers(baseMaps).addTo(this.map);

    osmLayer.addTo(this.map);
  }


}