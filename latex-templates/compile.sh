#!/usr/bin/env bash
# compile.sh — Build both English and Chinese resume PDFs
# Requires: xelatex, lmodern, Noto Sans CJK SC fonts
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo "=== Compiling English resume ==="
xelatex -interaction=nonstopmode resume-en.tex
echo "=== resume-en.pdf done ==="

echo "=== Compiling Chinese resume ==="
xelatex -interaction=nonstopmode resume-zh.tex
echo "=== resume-zh.pdf done ==="

echo "=== All PDFs generated successfully ==="
