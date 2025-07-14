uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;

varying float vElevation;


void main()
{
    // RGBA
    // gl_FragColor = vec4(0.5, 0.8, 1.0, 1.0);



    // If that third value is 0.0, the result will be the first input.
    // If that third value is 1.0, the result will be the second input.
    // If that third value is 0.5, the result will be a perfect mix of the two inputs.
    // If that third value is below 0.0 or above 1.0 the value will be extrapolated.
    float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
    vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>

}