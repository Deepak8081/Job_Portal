import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { ModeToggle } from './ModeToggle';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center ' >
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium dark:bg-[#17153B] '>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold dark:text-[#E0E0E0]' >Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full  dark:bg-black dark:text-[#E0E0E0]'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                        <Search className='h-5 w-5' />
                    </Button>
                    
                </div>
            </div>
        </div>
    )
}

export default HeroSection
// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux'
// import { setSearchedQuery } from '@/redux/jobSlice'
// import { useNavigate } from 'react-router-dom'

// const HeroSection = () => {
//   const [query, setQuery] = useState("")
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const searchJobHandler = () => {
//     dispatch(setSearchedQuery(query))
//     navigate("/browse")
//   }

//   return (
//     <div className="text-center transition-colors">
//       <div className="flex flex-col gap-5 my-10">
//         {/* Highlight Badge */}
//         <span className="mx-auto px-4 py-2 rounded-full bg-muted text-primary font-medium">
//           No. 1 Job Hunt Website
//         </span>

//         {/* Headline */}
//         <h1 className="text-5xl font-bold">
//           Search, Apply & <br />
//           Get Your <span className="text-primary">Dream Jobs</span>
//         </h1>

//         {/* Subtitle */}
//         <p className="text-muted-foreground">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!
//         </p>

//         {/* Search Input */}
//         <div className="flex w-[40%] max-w-md mx-auto items-center gap-2 border border-border shadow-md rounded-full px-4 py-2 bg-background">
//           <input
//             type="text"
//             placeholder="Find your dream jobs"
//             onChange={(e) => setQuery(e.target.value)}
//             className="w-full bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
//           />
//           <Button onClick={searchJobHandler} className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
//             <Search className="h-5 w-5" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroSection
