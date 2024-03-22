await import("./test-some");
await import("./test-none-ok");
await import("./test-type-ok");

/** will fail on bun 1.0.34 */
await import("./test-none-segv");

/** will fail on bun 1.0.34 */
await import("./test-type-segv");
