#!/usr/bin/env/python

import Image
import sys
import os

def resize(img, w, h, tp):
    img = os.path.abspath(img)
    tp = os.path.expanduser(tp)
    base = os.path.basename(img)
    dirn = os.path.dirname(img)
    size = w, h
    img = Image.open(img)
    t = img.resize(size, Image.ANTIALIAS)
    n = os.path.join(os.path.abspath(tp) , base + '.jpg')
    t.save(n)

if __name__ == '__main__':
    i = sys.argv[1]
    w = int(sys.argv[2])
    h = int(sys.argv[3])
    s = sys.argv[4]

    resize(i, w, h, s)
