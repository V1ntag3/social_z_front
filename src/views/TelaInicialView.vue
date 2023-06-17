<template>
    <div class="container" style="display: flex;">
        <div style="margin:auto;width: 90%; align-self: center;" class="row">
            <div class="col-12" style="padding: 0px; margin-top: 30px;">
                <h3 style="font-family: 'Poppins-Bold';
font-size: 18px;
line-height: 27px;
color: #FFFFFF;">Mapa de infectados</h3>
            </div>
            <div class="col-12" style="padding: 0; border-radius: 20px;">
                <div style="width: 540px; height: 540px;     border-radius: 15px;
    border: #f7f7f7 solid 13px;" id="mapdiv" class="map"></div>
            </div>
            <div class="col-12"></div>
        </div>

    </div>
</template>
<script>

export default {
    name: 'TelaInicialView',
    created() {


        setTimeout(() => {

            if (window.innerWidth < 600) {
                document.getElementById('mapdiv').style.width = window.innerWidth * 0.85 + 'px'
                document.getElementById('mapdiv').style.height = window.innerWidth * 0.85 + 'px'

            } else {
                document.getElementById('mapdiv').style.width = '540px'
                document.getElementById('mapdiv').style.height = '540px'

            }


            this.getLocation()
        }, 300);
    },
    data() {
        return {

        }
    },
    methods: {
        getLocation() {
            navigator.geolocation.getCurrentPosition(function (position) {

                var map = new OpenLayers.Map("mapdiv");
                map.addLayer(new OpenLayers.Layer.OSM());

                // var pois = new OpenLayers.Layer.Text("My Points",
                //     {
                //         location: "../../js/OpenLayers-2.13.1/textfile.txt",
                //         projection: map.displayProjection
                //     });
                // map.addLayer(pois);

                map.layers = [position.coords.longitude, position.coords.latitude]
        
                // create layer switcher widget in top right corner of map.
                var layer_switcher = new OpenLayers.Control.LayerSwitcher({});
                map.addControl(layer_switcher);
                //Set start centrepoint and zoom    
                var lonLat = new OpenLayers.LonLat(position.coords.longitude, position.coords.latitude)
                    .transform(
                        new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
                        map.getProjectionObject() // to Spherical Mercator Projection
                    );
                var zoom = 17;
                map.setCenter(lonLat, zoom);
            });
        }
    }
}
window.onresize = () => {
    if (window.innerWidth < 600) {
        document.getElementById('mapdiv').style.width = window.innerWidth * 0.85 + 'px'
        document.getElementById('mapdiv').style.height = window.innerWidth * 0.85 + 'px'

    } else {
        document.getElementById('mapdiv').style.width = '500px'
        document.getElementById('mapdiv').style.height = '500px'

    }


    getLocation()
}
</script>
  
<style scoped>
#map {
    border-radius: 20px;
    border: 4px solid white;
    margin: auto;
    background-color: white;
}

#OpenLayers_Map_2_OpenLayers_ViewPort {
    border-radius: 30px !important;
}

/* .dados-social
@media (min-width: 576px) {}

@media (max-width: 768px) {} */
</style>

