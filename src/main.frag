#version 120 // glsl version 1.2 for OpenGL 2.1

uniform vec2 windowSize;
uniform vec2 mousePos;
uniform float time;

void main(void) {
    vec2 pos = gl_FragCoord.xy / windowSize;

    float red = mod(pos.x + time * 0.2, 1.0);
    vec4 color = vec4(red, pos.y, 0.0, 1.0);

    float dx = gl_FragCoord.x - mousePos.x;
    float dy = gl_FragCoord.y - mousePos.y;

    if (dx * dx + dy * dy <= 100.0) {
        color = vec4(1.0, 1.0, 1.0, 1.0);
    }

    gl_FragColor = color;
}
