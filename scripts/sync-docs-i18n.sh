#!/usr/bin/env bash
# Sync crowdin-downloaded docs translations (.md files) to element-plus/docs-i18n.
#
# Usage:
#   COMMIT_MESSAGE="..." bash scripts/sync-docs-i18n.sh <docs_dir> <docs-i18n_dir> [--push]
#
# - <docs_dir>:      path to the docs directory containing crowdin-pulled
#                    translation directories (e.g. docs/ with zh-CN/, es-ES/)
# - <docs-i18n_dir>: path to a checkout of element-plus/docs-i18n
# - --push:          commit and push to origin (used in CI). Without it only
#                    the sync + commit happens locally for preview.
# - COMMIT_MESSAGE:  optional env var, defaults to "docs-i18n: sync translations"

set -euo pipefail

DOCS_DIR="${1:?missing <docs_dir>}"
TARGET_REPO_DIR="${2:?missing <docs-i18n_dir>}"
COMMIT_MESSAGE="${COMMIT_MESSAGE:-docs-i18n: sync translations}"

for lang_dir in "$DOCS_DIR"/*/; do
  [ -d "$lang_dir" ] || continue
  lang="$(basename "$lang_dir")"
  # only language directories like zh-CN / es-ES, skip en-US and non-lang dirs
  [[ "$lang" =~ ^[a-z]{2}(-[A-Z]{2})?$ ]] || continue
  [ "$lang" = "en-US" ] && continue
  find "$lang_dir" -name '*.md' -type f -print -quit | grep -q . || continue

  mkdir -p "$TARGET_REPO_DIR/$lang"
  rsync -a \
    --delete \
    --include='*/' \
    --include='*.md' \
    --exclude='*' \
    "$lang_dir" "$TARGET_REPO_DIR/$lang/"
done

cd "$TARGET_REPO_DIR"

git config user.name "ElementPlusBot"
git config user.email "element-plus@outlook.com"

git add -A

if git diff --cached --quiet; then
  echo "No changes"
  exit 0
fi

git commit -m "$COMMIT_MESSAGE"

if [[ "${3:-}" == "--push" ]]; then
  git push origin main
fi
