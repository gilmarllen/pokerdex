set "XP_HOME=C:\Users\gilma\Documents\enonic-xp-6.15.5-POKERDEX\home"
cd "C:\Users\gilma\Desktop\Git\pokerdex\backend\xp"
call gradlew.bat clean build
timeout 2
call gradlew.bat deploy
pause