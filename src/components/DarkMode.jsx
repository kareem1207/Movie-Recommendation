"use client";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import {useTheme}  from "next-themes";
import { useEffect, useState } from "react";
export const DarkMode = ()=>{
    const { theme , setTheme , systemTheme } = useTheme();
    const [mounted , setMounted] = useState(false);
    const currentTheme = theme === "system" ? systemTheme : theme;
    useEffect(()=>{
        setMounted(true);
    },[]);
    return<>
    <div>
        {
            mounted && ( currentTheme === "dark" ? (
                <FaSun
                onClick={()=>setTheme("light")}
                className="text-xl cursor-pointer hover:text-amber-400"
                />
            ):
        ( <FaMoon
            onClick={()=>setTheme("dark")}
            className="text-xl cursor-pointer hover:text-blue-200"
            />
            )
    )
        }
    </div>
    </>
} 