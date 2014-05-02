function color(){
   return this;
}
var color = {
    HexToRGB: function(hex) {
        var r     = parseInt(hex.substr(1,2), 16),
            g     = parseInt(hex.substr(3,2), 16),
            b     = parseInt(hex.substr(5,2), 16);
        return [r, g, b];
    },
    RGBToHSL: function(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;

        var h = 0,
            s = 0,
            l = 0;

        var min = Math.min(r,g,b),
        	max = Math.max(r,g,b);

        var chroma = max - min;

        l = ( min + max ) / 2;

        if( chroma != 0 )
        {        	
        	s = chroma / (1 - Math.abs(( 2 * l ) - 1));
        	s = (r <= 0.004 || g <= 0.004 || b <= 0.004)? 1 : s;
        	switch(max){
        		case r: h = Math.round((60*((g-b)/chroma)+360)%360);break;
        		case g: h = Math.round((60*((b-r)/chroma)+120));break;
        		case b: h = Math.round((60*((r-g)/chroma)+240));break;
        	}

        }
       
        s = Math.round(s*100);
        l = Math.round(l*100);

        return [h, s, l];
    },
    HSLToBasic: function(h, s, l) {
        var color       = "",
       	    wl = 93, // white limit
       	    bl = 9,  // black limit
       	    lv = s / 16;

        color = (s <= 10 && (9 <= l && l <= 90))? "Grey" : color; 
        color = ((wl + lv) <= l && (9 <= l && l <= 100))? "White" : color;
        color = ((bl - lv) >= l && (0 <= l ))? "Black" : color;

        if(color != "") return color;

        color = ( h   <= 8 || h >= 346 )? "Red" :    color;
        color = ( 8   <= h && h <= 40  )? "Orange" : color;
        color = ( 40  <= h && h <= 65  )? "Yellow" : color;
        color = ( 65  <= h && h <= 170 )? "Green" :  color;
        color = ( 170 <= h && h <= 240 )? "Blue" :   color;
        color = ( 240 <= h && h <= 346 )? "Purple" : color;


        color = ( 9   <= h && h <= 50 && l < 40 )? "Brown" : color;

        return color;
    },
    HexToBasic: function(hex){
    	var rgb = this.HexToRGB(hex);
    	var hls = this.RGBToHSL(rgb[0],rgb[1],rgb[2]);
    	return this.HSLToBasic(hls[0],hls[1],hls[2]);
    },
    RGBToBasic: function(r,g,b){    	
    	var hls = this.RGBToHSL(r,g,b);
    	return this.HSLToBasic(hls[0],hls[1],hls[2]);
    }
};