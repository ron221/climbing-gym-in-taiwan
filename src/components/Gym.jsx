import React, { useState } from 'react'
import {data} from '../data/data.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, fas);

const Gym = () => {
    const [gyms] = useState(data);
    const [selectedTags, setSelectedTags] = useState([]);
    const [tags] = useState([
        { text: '位置', active: false, key: 'location', icon: 'location-crosshairs' },
        { text: '平日營業時間', active: false, key: 'weekday_open_time', icon: 'clock' },
        { text: '假日營業時間', active: false, key: 'weekend_open_time', icon: 'clock' },
        { text: '平日價格', active: false, key: 'weekday_price', icon: 'money-bill' },
        { text: '假日價格', active: false, key: 'weekend_price', icon: 'money-bill' },
        { text: '星光票', active: false, key: 'night_ticket',  icon: 'star' },
        { text: '學生票', active: false, key: 'student_ticket', icon: 'graduation-cap' },
        { text: '兒童票', active: false, key: 'kid_ticket', icon: 'child' },
        { text: '裝備租借', active: false, key: 'rental', icon: 'sack-xmark' },
        { text: '類型', active: false, key: 'type', icon: 'otter' },
        { text: '會員制度', active: false, key: 'membership', icon: 'id-card' },
        { text: '體驗課程', active: false, key: 'trial_course', icon: 'clipboard' },
    ]);

    const handleTagClick = (index) => {
        const newSelectedTags = [...selectedTags];
        const tagIndex = newSelectedTags.indexOf(index);

        if (tagIndex === -1) {
            newSelectedTags.push(index);
        } else {
            newSelectedTags.splice(tagIndex, 1);
        }
        setSelectedTags(newSelectedTags);
    };

    const [areaFilter] = useState([
        { text: '北部', key: 'north' },
        { text: '西部', key: 'west' },
        { text: '東部', key: 'east' },
        { text: '南部', key: 'south' },
    ]);
    const [filter, setFilter] = useState('');
    function handleAreaFilterClick(newFilter) {
        setFilter(newFilter);
      }

    const filteredGyms = gyms.filter(gym => {
        if (filter === '') {
            return true;
        }
        // 根據你的過濾條件來修改這一部分
        return gym.area === filter;
    });

    return (
        <div className='max-w-[1640px] m-auto px-4 py-2'>
            {/* <h1 className='text-[#00203FFF] font-bold text-4xl text-center'>去哪爬</h1> */}

            <div className="flex flex-wrap justify-center items-center py-2">
                {areaFilter.map((area, index) => (
                    <button
                    className={`py-1 px-3 mx-2 my-1 rounded-md rounded-tl-md rounded-br-md border border-solid border-[#616247FF] text-[#616247FF] ${filter === area.key ? "bg-[#adad9e] font-bold" : "bg-transparent"} hover:bg-[#e3e3de] hover:font-bold`}
                        key={area.text}
                        onClick={() => handleAreaFilterClick(area.key)}
                    >
                        {area.text}
                    </button>
                ))}
            </div>

            <div className="flex flex-wrap justify-center items-center py-2">
                {tags.map((tag, index) => (
                    <button
                    className={`py-1 px-2 mx-2 my-1 rounded-md rounded-tl-md rounded-br-md border border-solid border-[#DAA03DFF] text-[#DAA03DFF] ${selectedTags.includes(index) ? "bg-[#f3e1c3] font-bold" : "bg-transparent"} hover:bg-[#fbf5eb] hover:font-bold`}
                        key={tag.text}
                        onClick={() => handleTagClick(index)}
                    >
                        {tag.text}
                    </button>
                ))}
            </div>

            {/* 顯示岩館資訊 */}
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-2'>
                {filteredGyms.map((item, index)=> (
                    // <a href={item.web}>
                    <div key={index} className='border shadow-lg rounded-lg '>
                    {/* hover:scale-105 duration-300 讓上方div有動畫效果的 暫時拿掉一下*/}
                        <img src={process.env.PUBLIC_URL +  '/gym_img/' + item.image}  alt={item.name}
                        className='w-full h-[200px] object-cover rounded-t-lg'
                        />
                        <div className="py-4 px-2">
                            <div className='flex justify-between items-center'>
                                <h1 className="sm:text-2xl font-semibold text-[#4e4e39]">{item.name}</h1>
                            </div>
                            {/* <a href={item.googlemaps} className="sm:text-base font-semibold text-[#4e4e39]">Google Maps</a> */}
                            {tags.map((tag, index) => (
                                selectedTags.includes(index) && <div className="flex items-start mt-2 text-[#616247FF]">
                                <div>
                                    <FontAwesomeIcon icon={tag.icon} className='inline-block mr-2' style={{ fontSize: '0.8rem' }} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="px-1 sm:text-sm">{item[tag.key]}</p>
                                </div>
                            </div>
                            ))}

                        </div>
                    </div>
                    // </a>
                ))}
            </div>
        </div>

    )
}

export default Gym


//idea: 還是要有個地區 filter 不然一個頁面太多家
//idea: 岩館旁邊有個叉叉可以把它關掉