"use client";

import { use, useState } from "react";
import React, { useEffect } from "react";
import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function Homepage(){
    //save articles to local storage for test
    const [content, setContent] = useState<string>("段落やtxtファイル、epubファイルをアップロードしてください");
    //save client selected text to storage
    const [selectedText, setSelectedText] = useState<string>("");
    // if is read mode
    const [isReading, setIsReading] = useState<string>("");
    //input text area value
    const [tempInput, setTempInput] = useState<string>("");

    //for test
    const handleFileUpload = () =>{
    setContent(
        "吾輩は猫である。名前はまだ無い。"
    );
    };

    const handleMouseUp = () => {
    const selection = window.getSelection();
    const text = selection ? selection.toString().trim() : "";
    if (text) {
        setSelectedText(text);
        console.log("get it", text); 
        if (text) {
        const truncatedText = text.slice(0, 500);
        setSelectedText(truncatedText);
        console.log("Text truncated to 500 chars:", truncatedText); 
    }
    }
    };



return (
    <div className="flex h-screen w-full bg-slate-50">
        {/* Reading area */}
        <div className="w-[70%] h-full p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-4xl font-[family-name:var(--font-quicksand)] font-extrabold tracking-tight">
                    <span className="text-blue-900">Hou</span>
                    <span className="text-[#8b7355]">getsu</span>
                </h1>
                <Button onClick={handleFileUpload}>simulation</Button>
            </div>

            <Card className="flex-1 overflow-hidden shadow-md">
                <ScrollArea className="h-full">
                    <div
                        className="text-lg leading-loose text-slate-900 font-serif cursor-text p-8" onMouseUp={handleMouseUp}
                    >
                        <textarea
                            placeholder = "Paste your text here..."
                            className="w-full h-full min-h-[600px] p-4 border-none outline-none resize-none font-serif text-2xl leading-relaxed bg-transparent maxLength={5000}"
                            value={tempInput}
                            onChange ={(e) => setTempInput(e.target.value)}
                        />
                    </div>
                </ScrollArea>
            </Card>
        </div>

        {/* AI area */}
        <div className="w-[30%] h-full border-l border-slate-200 bg-white p-4 flex flex-col">
            <div className="mb-4">
                <h2 className="text-xl font-bold text-slate-700">AI transport</h2>
                <p className="text-sm text-black">Select text to translate</p>
            </div>

            <div className="mb-6 p-4 bg-slate-100 rounded-lg">
                <span className="text-xs font-bold text-slate-500 uppercase">Selected Text</span>

                <ScrollArea className = "h-32 mt-2 pr-2">
                    <p className="text-xl font-bold text-blue-600 mt-1 min-h-[1.5rem]">
                        {selectedText || "..."}
                    </p>
                </ScrollArea>
            </div>

            <div className="flex-1 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center text-slate-400">
            Output AI response
            </div>
        </div>

    </div>
)
}

