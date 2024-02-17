# Init repository

## Install dependency

``` terminal
sudo apt update

sudo apt-get upgrade

sudo apt-get install nodejs

sudo apt install npm

sudo apt-get install git-all
```

``` terminal
nodejs -v

npm -v
```

``` terminal
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0

. "$HOME/.asdf/asdf.sh"

. "$HOME/.asdf/completions/asdf.bash"

asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
```

## Node configuration

``` terminal
asdf install nodejs v20.11.0

asdf local nodejs v20.11.0
```

``` terminal
git clone git@github.com:EliabeBastosDias/dinners.git
```

``` terminal
npm init -y
```
