import {useEffect, useRef} from 'react';
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/outline'


const posts = [
  {
    title: 'WorkingBee Title',
    href: '#',
    category: { name: 'Animal', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg',
    readingTime: '11.30am',
      author: {
      name: 'RSPCA',
      href: '#',
      imageUrl:
        'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-icon-placeholder.jpg',
    },
  },
  {
    title: 'WorkingBee Title',
    href: '#',
    category: { name: 'Education', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg',
    readingTime: '11.30am',
    author: {
      name: 'Surreyhill Primary',
      href: '#',
      imageUrl:
        'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-icon-placeholder.jpg',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Emergency', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg',
    readingTime: '11.30am',
    author: {
      name: 'Covid Relief',
      href: '#',
      imageUrl:
      'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-icon-placeholder.jpg',
    },
  },
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Sporting', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg',
    readingTime: '6 min',
    author: {
      name: 'Under 12s Football club',
      href: '#',
      imageUrl:
        'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-icon-placeholder.jpg',
    },
  },
  {
    title: 'WorkingBee Title',
    href: '#',
    category: { name: 'Other', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg',
    readingTime: '11.30am',
    author: {
      name: 'Yarra Clean up',
      href: '#',
      imageUrl:
        'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-icon-placeholder.jpg',
    },
  },
  {
    title: 'WorkingBee Title',
    href: '#',
    category: { name: 'Nonprofits & Charities', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg',
    readingTime: '11.30am',
    author: {
      name: 'Womens Refuge',
      href: '#',
      imageUrl:
        'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-icon-placeholder.jpg',
    },
  },
]



export default function TileCard() {

  return (
  <>
 {posts.map((post) => (
            <div key={post.title} className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
              <div className='flex-shrink-0'>
                <img className='h-48 w-full object-cover' src={post.imageUrl} alt='' />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-indigo-600'>
                    <a href={post.category.href} className='hover:underline'>
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className='block mt-2'>
                    <p className='text-xl font-semibold text-gray-900'>{post.title}</p>
                    <p className='mt-3 text-base text-gray-500'>{post.description}</p>
                  </a>
                </div>
                <div className='mt-6 flex items-center'>
                  <div className='flex-shrink-0'>
                    <a href={post.author.href}>
                      <span className='sr-only'>{post.author.name}</span>
                      <img className='h-10 w-10 rounded-full' src={post.author.imageUrl} alt='' />
                    </a>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <a href={post.author.href} className='hover:underline'>
                        {post.author.name}
                      </a>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden='true'>&middot;</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

</>
  )
}