// precision mediump float;

varying float vRandom;
uniform vec3 uColor;
uniform sampler2D uTexture;

varying vec2 vUv;
varying float vElevation;



void main()
{
    // gl_FragColor = vec4(1.0, vRandom, 1.0, .5);
    // gl_FragColor = vec4(1.0, 0.0 , 0.0, 1);
    // gl_FragColor = vec4(uColor, 1);



    vec4 textureColor = texture2D(uTexture, vUv);
    textureColor.rgb *= vElevation * 2.0 + 0.5;

    gl_FragColor = textureColor;
}