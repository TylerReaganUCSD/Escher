/*TODO:
1. Consult Zak on efficiency so maps only load when tab is visible
2. Consult Nate about how to get the reaction scores from Cellfie
*/

$(document).foundation();

/* global d3, escher */

function Kami() {

    const map_data_cache = {}

    var tinier = escher.libs.tinier

    var tooltip_style = {
      'min-width': '40px',
      'min-height': '10px',
      'border-radius': '2px',
      'border': '1px solid #b58787',
      'padding': '7px',
      'background-color': '#fff',
      'text-align': 'left',
      'font-size': '16px',
      'font-family': 'sans-serif',
      'color': '#111',
      'box-shadow': '4px 6px 20px 0px rgba(0, 0, 0, 0.4)',
    }

    // ----------------------------------------------------------------------------------------------
    // Template: show the map and have a graph appear on hover over reactions that states their score
    // ----------------------------------------------------------------------------------------------

    var template = {
        // Just show the zoom buttons
        menu: 'zoom',
        // use the smooth pan and zoom option
        use_3d_transform: true,
        // No editing in this map
        enable_editing: false,
        // No keyboard shortcuts
        enable_keys: false,
        // No tooltips
        enable_tooltips: true,
        // Determine active tooltips
        // tooltip_component: toooltips_4,
        // reaction_data: {
        //     ECOAH9m: 10,
        // },
    };

    const builder = escher.Builder(null, null, null, d3.select('#map_container'), template);
    const builder1 = escher.Builder(null, null, null, d3.select('#map_container1'), template);
    const builder2 = escher.Builder(null, null, null, d3.select('#map_container2'), template);
    const builder3 = escher.Builder(null, null, null, d3.select('#map_container3'), template);
    const builder4 = escher.Builder(null, null, null, d3.select('#map_container4'), template);

    // if($('#panel1:visible').length) {
    //     var mappy = ('Vitamin&CofactorMetabolism.json');
    // } else if($('#panel2:visible').length) {
    //     var mappy = ('CarbohydratesMetabolism.json');
    // } else if($('#panel3:visible').length) {
    //     var mappy = ('Energy&NucleotideMetabolism.json');
    // } else if($('#panel4:visible').length) {
    //     var mappy = ('GlycanMetabolism.json');
    // } else if($('#panel5:visible').length) {
    //     var mappy = ('AminoAcidsMetabolism.json');
    // } else {
    //     console.log('%c RIP', "background: blue; color: black; padding-left:10px;");
    // }

    if($('#panel1:visible').length) {
        d3.json('Vitamin&CofactorMetabolism.json', function(e, data) {
            if (e) console.warn(e);
            builder.load_map(data)
        });
    } else if($('#panel2:visible').length) {
        d3.json('CarbohydratesMetabolism.json', function(e, data) {
            if (e) console.warn(e);
            builder1.load_map(data)
        });
    } else if($('#panel3:visible').length) {
        d3.json('Energy&NucleotideMetabolism.json', function(e, data) {
            if (e) console.warn(e);
            builder2.load_map(data)
        });
    } else if($('#panel4:visible').length) {
        d3.json('GlycanMetabolism.json', function(e, data) {
            if (e) console.warn(e);
            builder3.load_map(data)
        });
    } else if($('#panel5:visible').length) {
        d3.json('AminoAcidsMetabolism.json', function(e, data) {
            if (e) console.warn(e);
            builder4.load_map(data)
        });
    } else {
        console.log('%c RIP', "background: blue; color: black; padding-left:10px;");
    }

    // d3.json('Vitamin&CofactorMetabolism.json', function(e, data1) {  
    //     // the below line would be used to load the reaction data for weighted edges in the map  
    //     // d3.json('reaction_data.json', function(e, reaction_data) {
    //     if (e) console.warn(e);
    //     builder.load_map(data1, true)
    //     builder.set_reaction_data({
    //         ECOAH9m: 10,
    //     })
    // });

    $('#mapTabs').on('change.zf.tabs', function() {
        console.log('here', $('#panel1'), $('#panel1:visible'))

        if($('#panel1:visible').length) {
            d3.json('Vitamin&CofactorMetabolism.json', function(e, data) {
                if (e) console.warn(e);
                builder.load_map(data)
            });
            // the following is code that caches the JSON fetched at map load. time saved turns out to be inconsequential
            // name = 'AminoAcidsMetabolism.json'
            // if (name in map_data_cache) {
            //     builder.load_map(map_data_cache[name], true)
            // } else {
            //     d3.json(name, function(e, data1) {
            //         if (e) console.warn(e);
            //         builder.load_map(data1, true)
            //         map_data_cache[name] = data1
            //     });
            // }
        } else if($('#panel2:visible').length) {
            d3.json('CarbohydratesMetabolism.json', function(e, data) {
                if (e) console.warn(e);
                builder1.load_map(data)
                // the following line of code is a way to remove the edge weights from a map on tab 2's load
                // builder.set_reaction_data(null)
            });
        } else if($('#panel3:visible').length) {
            d3.json('Energy&NucleotideMetabolism.json', function(e, data) {
                if (e) console.warn(e);
                builder2.load_map(data)
            });
        } else if($('#panel4:visible').length) {
            d3.json('GlycanMetabolism.json', function(e, data) {
                if (e) console.warn(e);
                builder3.load_map(data)
            });
        } else if($('#panel5:visible').length) {
            d3.json('AminoAcidsMetabolism.json', function(e, data) {
                if (e) console.warn(e);
                builder4.load_map(data)
            });
        } else {
            console.log('%c RIP', "background: blue; color: black; padding-left:10px;");
        }
    });
};