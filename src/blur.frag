#version 120 // glsl version 1.2 for OpenGL 2.1

uniform sampler2D texture;
uniform vec2 textureSize;

void main() {
    vec2 uv = gl_TexCoord[0].xy;
    vec2 pixelSize = vec2(1.0, 1.0) / textureSize;

    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    for (int x = -2; x <= 2; x++) {
        for (int y = -2; y <= 2; y++) {
            vec2 offset = vec2(float(x), float(y)) * pixelSize;
            color += texture2D(texture, uv + offset);
        }
    }

    gl_FragColor = color / 25.0;
}
