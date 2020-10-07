#!/usr/bin/python3
import cgi

print("content-type:text/html")
print()

y=cgi.FieldStorage()
z=y.getvalue("x")
print("Input: {}".format(z))
print()

import subprocess

if "day" in z:
    p=subprocess.getoutput("date")

elif "time" in z:
    p=subprocess.getoutput("timedatectl")

elif "calender" in z:
    p=subprocess.getoutput("cal")

else:
    p=subprocess.getoutput("Still learning !Command not found!")

print("Output: {} ".format(p))
