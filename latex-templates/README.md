# LaTeX Resume Templates — Haocheng He

ATS-friendly, single-column LaTeX resume templates in English and Chinese.

## Files

| File | Description |
|------|-------------|
| `resume-en.tex` | English resume template |
| `resume-zh.tex` | Chinese resume template (xeCJK + Noto Sans CJK SC) |
| `compile.sh` | Build script — compiles both PDFs with `xelatex` |
| `README.md` | This file |

## Requirements

- **TeX distribution**: TeX Live (or MiKTeX) with `xelatex`
- **Fonts**: Noto Sans CJK SC (for Chinese version)
- **Packages**: `geometry`, `parskip`, `titlesec`, `enumitem`, `hyperref`, `fontenc`, `lmodern`, `xeCJK`, `fontspec`

### Install dependencies (Ubuntu/Debian)

```bash
sudo apt install texlive-xetex texlive-latex-extra fonts-noto-cjk
```

## Usage

```bash
bash compile.sh
```

This generates `resume-en.pdf` and `resume-zh.pdf` in the current directory.

## Design Principles

- **ATS-friendly**: Single column, no tables/text boxes/graphics, standard fonts
- **Clean layout**: A4, 1.5 cm side margins, 2 cm top/bottom, 11 pt body
- **Standard sections**: Contact · Summary · Education · Experience · Skills · Publications
