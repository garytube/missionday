DEFAULT_LANG=ua

all:
	./make.py
	cp ${DEFAULT_LANG}.html index.html
