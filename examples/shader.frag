void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec3 col = 0.5 + 0.5 * cos(u_time + uv.xyx + vec3(0,2,4));
    FragColor = vec4(col, 1.0);
}
