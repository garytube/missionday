#!/usr/bin/env python

from lang import ru, ua, en

TEMPLATE = '_index.html'
LANGUAGES = ['ru', 'ua', 'en']


def process_template(lang, template):
    return template


def main():
  template = open(TEMPLATE, 'r').read()
  
  for lang in LANGUAGES:
    out = open('%s.html' % lang, 'w+')
    out.write(process_template(lang, template))
    out.close()


if __name__ == '__main__':
  main()
