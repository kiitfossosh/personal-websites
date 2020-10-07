# WALL-E

**It's an ambitious project to use the preexisting technologies to create a jarvis like assistant to automate our daily task. It's been done under the mentorshop of [Vimal Daga](https://www.linkedin.com/in/vimaldaga) under the intiative of [Right Education](https://www.linkedin.com/in/vimaldaga).
You can also follow my [Notes](https://praddy2009.github.io/note/Specialist%20in%20Python%20(with%20Flask%20Towards%20Data%20Science)/Specialist_in_Python_(with_Flask_Towards_Data_Science).ctb_HTML/index.html#) to learn the components**

**You can find the course in [Youtube](https://www.youtube.com/c/IIECconnect/featured)**

## Features
- Server commands via Web console
- Realistic and Responsive interaction with Wall-E
- Responsive Website

## Setup
- Ubuntu
  - Install apache2 on base system and enable cgi
    ```
    #apt-get -y install python3
    #sudo apt-get install apache2
    #a2enmod cgi
    #systemctl restart apache2
    ```
  - Now save
    ```
    Web files at /var/www/html/
    linux.py at /lib/cgi-bin/
    ``` 
## Usage
  - Make sure you followed the setup
  - Use command
    > systemctl start apache2
  - Now open browser ["http://localhost/Index.html"](http://localhost/Jarvis/Index.html)
  - Use the input area to give commands

## Example Commands
  - Tell me the time?
  - Show me calender
  - What date is today?

## Future Add-ons
  - More support for different commands
  - Voice integration
  - Better UI with dynamic structure
  - Better security
