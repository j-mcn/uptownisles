import { LightningElement, api } from "lwc";
import { NavigationMixin } from 'lightning/navigation';

// load 3rd party library
import leaflet from "@salesforce/resourceUrl/leaflet";
import { loadStyle, loadScript } from "lightning/platformResourceLoader";

// retrieve data
import getServiceAppointments from "@salesforce/apex/ServiceAppointmentsMapController.getServiceAppointments";

export default class MyMap extends NavigationMixin(LightningElement) {

  @api mapboxToken;
  Latitude = 44.953550;
  Longitude = -93.299060;

  connectedCallback() {
    Promise.all([
      loadStyle(this, leaflet + "/leaflet.css"),
      loadScript(this, leaflet + "/leaflet.js"),
      getServiceAppointments(),
    ]).then(([, , appointments]) => {
      // initialize the library using a reference to the container element obtained from the DOM
      const el = this.template.querySelector("div");
      const mymap = L.map(el).setView([this.Latitude, this.Longitude], 15);

      // Load and display tile layers with your access token
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: 'mapbox/streets-v11',
        accessToken: this.mapboxToken
      }).addTo(mymap);

      // Add appointments to the map
      L.marker([this.Latitude, this.Longitude])
        .addTo(mymap)
    });
  }

  handleclick(event) {
    if (event.srcElement.dataset.recordId) {
      this[NavigationMixin.Navigate]({
        type: "standard__recordPage",
        attributes: {
          recordId: event.srcElement.dataset.recordId,
          objectApiName: 'ServiceAppointment'
        }
      });
    }
  }
}
