'use client'
import React, { useState } from 'react';
import { ButtonBase } from '@mui/material';
import CustomPDF from '@/components/CustomPDF';
import { PDFViewer } from '@react-pdf/renderer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


const DynamicForm = () => {
    // State for the main form fields
    const [party1Name, setParty1Name] = useState('');
    const [date, setDate] = useState('');
    const [party2Name, setParty2Name] = useState('');
    const [otherStuff, setOtherStuff] = useState('');

    // State for YouTube section
    const [youtubeShorts, setYoutubeShorts] = useState([]);
    const [youtubeVideos, setYoutubeVideos] = useState([]);

    // State for Instagram section
    const [instagramPosts, setInstagramPosts] = useState([]);
    const [instagramStories, setInstagramStories] = useState([]);
    const [formData, setFormData] = useState();

    // Function to handle adding items to YouTube section
    const addYoutubeItem = (section) => {
        if (section === 'shorts') {
            setYoutubeShorts([...youtubeShorts, { date: '', time: '', details: '' }]);
        } else if (section === 'videos') {
            setYoutubeVideos([...youtubeVideos, { date: '', time: '', details: '' }]);
        }
    };

    // Function to handle removing items from YouTube section
    const removeYoutubeItem = (section, index) => {
        if (section === 'shorts') {
            const updatedShorts = [...youtubeShorts];
            updatedShorts.splice(index, 1);
            setYoutubeShorts(updatedShorts);
        } else if (section === 'videos') {
            const updatedVideos = [...youtubeVideos];
            updatedVideos.splice(index, 1);
            setYoutubeVideos(updatedVideos);
        }
    };

    // Function to handle adding items to Instagram section
    const addInstagramItem = (section) => {
        if (section === 'posts') {
            setInstagramPosts([...instagramPosts, { date: '', time: '', details: '' }]);
        } else if (section === 'stories') {
            setInstagramStories([...instagramStories, { date: '', time: '', details: '' }]);
        }
    };

    // Function to handle removing items from Instagram section
    const removeInstagramItem = (section, index) => {
        if (section === 'posts') {
            const updatedPosts = [...instagramPosts];
            updatedPosts.splice(index, 1);
            setInstagramPosts(updatedPosts);
        } else if (section === 'stories') {
            const updatedStories = [...instagramStories];
            updatedStories.splice(index, 1);
            setInstagramStories(updatedStories);
        }
    };

    // Function to handle JSON representation of the form data
    const generateJSON = () => {
        const formData = {
            party1Name,
            date,
            party2Name,
            otherStuff,
            youtube: {
                shorts: youtubeShorts,
                videos: youtubeVideos
            },
            instagram: {
                posts: instagramPosts,
                stories: instagramStories
            }
        };
        setFormData(formData);
        console.log(formData);
        console.log(JSON.stringify(formData, null, 2));
    };

    return (
        <Tabs defaultValue='form' className='flex flex-col w-max md:block items-center'>
            <div className='flex flex-col justify-center items-center'>
                <TabsList>
                    <TabsTrigger value='form'>Form</TabsTrigger>
                    <TabsTrigger value='pdf' disabled={formData == null}>Preview</TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value='form'>
                <div className='max-w-4xl mx-auto p-4'>
                <h2 className="text-xl font-bold mb-4">Dynamic Nested Form</h2>

<div className="mb-4">
    <label className="block mb-2">Party 1 Name:</label>
    <input
        type="text"
        className="border border-gray-300 px-3 py-2 w-full rounded-full"
        value={party1Name}
        onChange={(e) => setParty1Name(e.target.value)}
    />
</div>

<div className="mb-4">
    <label className="block mb-2">Date:</label>
    <input
        type="date"
        className="border border-gray-300 px-3 py-2 w-full rounded-full"
        value={date}
        onChange={(e) => setDate(e.target.value)}
    />
</div>

<div className="mb-4">
    <label className="block mb-2">Party 2 Name:</label>
    <input
        type="text"
        className="border border-gray-300 px-3 py-2 w-full rounded-full"
        value={party2Name}
        onChange={(e) => setParty2Name(e.target.value)}
    />
</div>

<div className="mb-4">
    <label className="block mb-2">Other Stuff:</label>
    <input
        type="text"
        className="border border-gray-300 px-3 py-2 w-full rounded-full"
        value={otherStuff}
        onChange={(e) => setOtherStuff(e.target.value)}
    />
</div>

<div className="mb-8 border border-gray-300 rounded-3xl p-4">
    <h3 className="font-bold text-lg mb-2">YouTube</h3>

    <div className="mb-6 rounded-3xl">
        <h4 className="text-md font-bold mb-4">Shorts</h4>
        {youtubeShorts.map((item, index) => (
            <div key={index} className="mb-4 flex flex-col border-gray-300 border p-4 rounded-4xl gap-2 rounded-3xl">
                <div className="flex items-center justify-between mb-2 gap-2">
                    <span className="font-bold text-sm mr-2">Short {index + 1}</span>
                    <button
                        className="bg-red-500 text-white px-4 py-4 ml-auto rounded-full font-bold"
                        onClick={() => removeYoutubeItem('shorts', index)}
                    >
                        -
                    </button>
                </div>
                <input
                    type="date"
                    className="border border-gray-300 px-3 py-2 rounded-full w-full mb-2"
                    value={item.date}
                    onChange={(e) => {
                        const updatedShorts = [...youtubeShorts];
                        updatedShorts[index].date = e.target.value;
                        setYoutubeShorts(updatedShorts);
                    }}
                />
                <input
                    type="time"
                    className="border border-gray-300 px-3 py-2 rounded-full w-full mb-2"
                    value={item.time}
                    onChange={(e) => {
                        const updatedShorts = [...youtubeShorts];
                        updatedShorts[index].time = e.target.value;
                        setYoutubeShorts(updatedShorts);
                    }}
                />
                <input
                    type="text"
                    className="border border-gray-300 px-3 py-2 rounded-full w-full"
                    value={item.details}
                    onChange={(e) => {
                        const updatedShorts = [...youtubeShorts];
                        updatedShorts[index].details = e.target.value;
                        setYoutubeShorts(updatedShorts);
                    }}
                />
            </div>
        ))}
        <div className="flex justify-end">
            <ButtonBase
                className="rounded-full font-bold px-4 py-2 w-full"
                style={{ backgroundColor: "lightgray" }}
                onClick={() => addYoutubeItem('shorts')}
            >
                ADD Short {youtubeShorts.length+1}
            </ButtonBase>
        </div>
    </div>

    <div>
        <h4 className="text-md font-bold mt-4 mb-4">Videos</h4>
        {youtubeVideos.map((item, index) => (
            <div key={index} className="mb-4 border-gray-300 border p-4 rounded-3xl flex flex-col gap-2">
                <div className="flex items-center justify-between mb-2">
                    <span className="font-bold mr-2 text-sm">Video {index + 1}</span>
                    <button
                        className="bg-red-500 text-white px-4 py-4 ml-auto rounded-full font-bold"
                        onClick={() => removeYoutubeItem('videos', index)}
                    >
                        -
                    </button>
                </div>
                <input
                    type="date"
                    className="border border-gray-300 px-3 py-2 rounded-full w-full mb-2"
                    value={item.date}
                    onChange={(e) => {
                        const updatedVideos = [...youtubeVideos];
                        updatedVideos[index].date = e.target.value;
                        setYoutubeVideos(updatedVideos);
                    }}
                />
                <input
                    type="time"
                    className="border border-gray-300 px-3 py-2 rounded-full w-full mb-2"
                    value={item.time}
                    onChange={(e) => {
                        const updatedVideos = [...youtubeVideos];
                        updatedVideos[index].time = e.target.value;
                        setYoutubeVideos(updatedVideos);
                    }}
                />
                <input
                    type="text"
                    className="border border-gray-300 px-3 py-2 rounded-full w-full"
                    value={item.details}
                    onChange={(e) => {
                        const updatedVideos = [...youtubeVideos];
                        updatedVideos[index].details = e.target.value;
                        setYoutubeVideos(updatedVideos);
                    }}
                />
            </div>
        ))}
        <div className="flex justify-end">
            <ButtonBase
                className="rounded-full font-bold px-4 py-2 w-full"
                style={{ backgroundColor: "lightgray" }}
                onClick={() => addYoutubeItem('videos')}
            >
                ADD Video {youtubeVideos.length + 1}
            </ButtonBase>
        </div>
    </div>
</div>
<br/>
<div className="mb-8 border border-gray-300 rounded-3xl p-4">
    <h3 className="text-lg font-bold mb-2">Instagram</h3>

    <div className="mb-6">
        <h4 className="text-md font-bold mb-4">Posts</h4>
        {instagramPosts.map((item, index) => (
            <div key={index} className="mb-4 border-gray-400 border rounded-3xl p-4 flex flex-col gap-2 text-sm">
                <div className="flex items-center mb-4 justify-between">
                    <span className="font-bold mr-2">Post {index + 1}</span>
                    <button
                        className="bg-red-500 text-white px-4 py-4 ml-auto rounded-full font-bold"
                        onClick={() => removeInstagramItem('posts', index)}
                    >
                        -
                    </button>
                </div>
                <input
                    type="date"
                    className="border border-gray-300 px-3 py-2 rounded-full w-full mb-2"
                    placeholder="Date"
                    value={item.date}
                    onChange={(e) => {
                        const updatedPosts = [...instagramPosts];
                        updatedPosts[index].date = e.target.value;
                        setInstagramPosts(updatedPosts);
                    }}
                />
                <input
                    type="time"
                    className="border border-gray-300 px-3 py-2 rounded-full w-full mb-2"
                    placeholder="Time"
                    value={item.time}
                    onChange={(e) => {
                        const updatedPosts = [...instagramPosts];
                        updatedPosts[index].time = e.target.value;
                        setInstagramPosts(updatedPosts);
                    }}
                />
                <input
                    type="text"
                    className="border border-gray-300 px-3 py-2 rounded-full w-full"
                    placeholder="Details"
                    value={item.details}
                    onChange={(e) => {
                        const updatedPosts = [...instagramPosts];
                        updatedPosts[index].details = e.target.value;
                        setInstagramPosts(updatedPosts);
                    }}
                />
            </div>
        ))}
        <div className="flex justify-end">
            <ButtonBase
                className="rounded-full font-bold px-4 py-2 w-full"
                style={{ backgroundColor: "lightgray" }}
                onClick={() => addInstagramItem('posts')}
            >
                ADD Post {instagramPosts.length + 1}
            </ButtonBase>
        </div>
    </div>

    <div>
        <h4 className="text-md font-bold my-2">Stories</h4>
        {instagramStories.map((item, index) => (
            <div key={index} className="mb-4 border-gray-300 rounded-3xl border p-4 text-sm flex flex-col gap-2">
                <div className="flex items-center mb-4 justify-between">
                    <span className="font-bold mr-2">Story {index + 1}</span>
                    <button
                        className="bg-red-500 text-white px-4 py-4 ml-auto rounded-full font-bold"
                        onClick={() => removeInstagramItem('stories', index)}
                    >
                        -
                    </button>
                </div>
                <input
                    type="date"
                    className="border border-gray-300 px-3 py-2 rounded-full w-full mb-2"
                    placeholder="Date"
                    value={item.date}
                    onChange={(e) => {
                        const updatedStories = [...instagramStories];
                        updatedStories[index].date = e.target.value;
                        setInstagramStories(updatedStories);
                    }}
                />
                <input
                    type="time"
                    className="border border-gray-300 px-3 py-2 rounded-full w-full mb-2"
                    placeholder="Time"
                    value={item.time}
                    onChange={(e) => {
                        const updatedStories = [...instagramStories];
                        updatedStories[index].time = e.target.value;
                        setInstagramStories(updatedStories);
                    }}
                />
                <input
                    type="text"
                    className="border border-gray-300 px-3 py-2 rounded-full w-full"
                    placeholder="Details"
                    value={item.details}
                    onChange={(e) => {
                        const updatedStories = [...instagramStories];
                        updatedStories[index].details = e.target.value;
                        setInstagramStories(updatedStories);
                    }}
                />
            </div>
        ))}
        <div className="flex justify-end">
            <ButtonBase
                className="rounded-full font-bold px-4 py-2 w-full"
                style={{ backgroundColor: "lightgray" }}
                onClick={() => addInstagramItem('stories')}
            >
                ADD Story {instagramStories.length + 1}
            </ButtonBase>
        </div>
    </div>
</div>
<br/>
<ButtonBase
    className="bg-green-500 text-white px-4 py-2 rounded-full font-bold"
    onClick={generateJSON}
>
    Generate JSON
</ButtonBase>
                </div>
            </TabsContent>
            <TabsContent value='pdf'>
                <div className='h-full'>
                    <CustomPDF formData={formData}/>
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default DynamicForm;
