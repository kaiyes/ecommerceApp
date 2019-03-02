#!/bin/bash
declare -a simulators=("6CC99E52-C221-46A8-8B6B-CA20AA6B9976" "292A99C7-7721-4E27-9126-3F7057459490" )

for i in "${simulators[@]}"
do
    xcrun instruments -w $i
    xcrun simctl install $i ~/.expo/ios-simulator-app-cache/Exponent-2.10.0.app
    xcrun simctl openurl $i exp://127.0.0.1:19000      
	done
