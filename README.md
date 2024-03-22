# bun 1.0.34 regression bug: segmentation fault with empty exports

to reproduce:

```bash
curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.34"
bun install
bun start
```
