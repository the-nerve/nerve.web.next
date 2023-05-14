#!/bin/bash

ROOT_DIR=$(git rev-parse --show-toplevel)
cd $ROOT_DIR

echo "🧬 Setting up nerve.web.next repository tooling for a seamless engineering experience..."
echo "---------------------------------------------------------------------------------------"

function command_exists {
    command -v "${1}" &>/dev/null
}

if ! command_exists asdf; then
  echo "🚨 Command 'asdf' is missing. Please install by following the instructions at https://asdf-vm.com/guide/getting-started.html"
  exit 1
fi

# Install necessary asdf plugins
echo "🧐 Checking 'asdf' plugins for tools defined in '.tool-versions'"
while read package; do
  plugin=${package%% *}
  version=${package#* }

  printf "🔎 Checking for ${package}... "
  asdf list $plugin | grep $version >/dev/null 2>/dev/null
  if [ $? -ne 0 ]; then
    echo "📦 Installing ${package}"
    asdf plugin add $plugin
    asdf install $plugin $version
    echo "✅ Installed ${package} successfully"
  else
    echo "🟢 ${package} already insttalled"
  fi
done < $ROOT_DIR/.tool-versions

# Setup Vercel CLI
printf "🔎 Checking for Vercel CLI..."
if ! command_exists vercel; then
  echo "Command 'vercel' is missing. ⚫️ Installing latest Vercel CLI..."
  pnpm i -g vercel@latest
  echo "✅ Installed Vercel CLI successfully"
  exit 1
else
  echo "🟢 Vercel CLI already installed"
fi

# Finalize
echo "--------------------------------------------------"
echo "🚀 Setup completed successfully. Happy creating 🎉"
