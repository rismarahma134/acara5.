var wms_layers = [];


        var lyr_acara5_0 = new ol.layer.Tile({
            'title': 'acara 5',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kecamatan_1 = new ol.format.GeoJSON();
var features_Kecamatan_1 = format_Kecamatan_1.readFeatures(json_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_1.addFeatures(features_Kecamatan_1);
var lyr_Kecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_1, 
                style: style_Kecamatan_1,
                popuplayertitle: 'Kecamatan ',
                interactive: true,
    title: 'Kecamatan <br />\
    <img src="styles/legend/Kecamatan_1_0.png" /> Ampel<br />\
    <img src="styles/legend/Kecamatan_1_1.png" /> Andong<br />\
    <img src="styles/legend/Kecamatan_1_2.png" /> Banyudono<br />\
    <img src="styles/legend/Kecamatan_1_3.png" /> Boyolali<br />\
    <img src="styles/legend/Kecamatan_1_4.png" /> Cepogo<br />\
    <img src="styles/legend/Kecamatan_1_5.png" /> Gladagsari<br />\
    <img src="styles/legend/Kecamatan_1_6.png" /> Juwangi<br />\
    <img src="styles/legend/Kecamatan_1_7.png" /> Karanggede<br />\
    <img src="styles/legend/Kecamatan_1_8.png" /> Kemusu<br />\
    <img src="styles/legend/Kecamatan_1_9.png" /> Klego<br />\
    <img src="styles/legend/Kecamatan_1_10.png" /> Mojosongo<br />\
    <img src="styles/legend/Kecamatan_1_11.png" /> Musuk<br />\
    <img src="styles/legend/Kecamatan_1_12.png" /> Ngemplak<br />\
    <img src="styles/legend/Kecamatan_1_13.png" /> Nogosari<br />\
    <img src="styles/legend/Kecamatan_1_14.png" /> Sambi<br />\
    <img src="styles/legend/Kecamatan_1_15.png" /> Sawit<br />\
    <img src="styles/legend/Kecamatan_1_16.png" /> Selo<br />\
    <img src="styles/legend/Kecamatan_1_17.png" /> Simo<br />\
    <img src="styles/legend/Kecamatan_1_18.png" /> Tamansari<br />\
    <img src="styles/legend/Kecamatan_1_19.png" /> Teras<br />\
    <img src="styles/legend/Kecamatan_1_20.png" /> Wonosamodro<br />\
    <img src="styles/legend/Kecamatan_1_21.png" /> Wonosegoro<br />' });
var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);
var lyr_Sungai_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_2, 
                style: style_Sungai_2,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_2.png" /> Sungai'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: 'Jalan',
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_3_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_3_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_3_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/Jalan_3_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_3_4.png" /> Jalan Setapak<br />\
    <img src="styles/legend/Jalan_3_5.png" /> sumber data segmen jalan dari OSM, sumber data segmen nama jalan dari PU<br />' });
var format_RumahSakit_4 = new ol.format.GeoJSON();
var features_RumahSakit_4 = format_RumahSakit_4.readFeatures(json_RumahSakit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_4.addFeatures(features_RumahSakit_4);
var lyr_RumahSakit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_4, 
                style: style_RumahSakit_4,
                popuplayertitle: 'Rumah Sakit',
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_4.png" /> Rumah Sakit'
            });

lyr_acara5_0.setVisible(true);lyr_Kecamatan_1.setVisible(true);lyr_Sungai_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_RumahSakit_4.setVisible(true);
var layersList = [lyr_acara5_0,lyr_Kecamatan_1,lyr_Sungai_2,lyr_Jalan_3,lyr_RumahSakit_4];
lyr_Kecamatan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sungai_2.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADATGL': 'ADATGL', 'DMAX': 'DMAX', 'FNGAIR': 'FNGAIR', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'LTKSGI': 'LTKSGI', 'NAMWS': 'NAMWS', 'STATUS': 'STATUS', 'UKRSGI': 'UKRSGI', 'WMAX': 'WMAX', 'DBTMXS': 'DBTMXS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Jalan_3.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RumahSakit_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_Kecamatan_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sungai_2.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADATGL': 'TextEdit', 'DMAX': 'TextEdit', 'FNGAIR': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'LTKSGI': 'TextEdit', 'NAMWS': 'TextEdit', 'STATUS': 'TextEdit', 'UKRSGI': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMXS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'TextEdit', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'STARJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'VLCPRT': 'TextEdit', 'WLYRJL': 'TextEdit', 'TGL_SK': 'TextEdit', 'JLNLYG': 'TextEdit', 'KLSRJL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_RumahSakit_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', });
lyr_Kecamatan_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Sungai_2.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADATGL': 'no label', 'DMAX': 'no label', 'FNGAIR': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'LTKSGI': 'no label', 'NAMWS': 'no label', 'STATUS': 'no label', 'UKRSGI': 'no label', 'WMAX': 'no label', 'DBTMXS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Jalan_3.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_RumahSakit_4.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_RumahSakit_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});