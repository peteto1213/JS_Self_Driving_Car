function lerp(A, B, t){
    // when t = 0, B-A = 0
    return A + (B-A) * t;
}