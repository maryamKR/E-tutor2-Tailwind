const arr_courses = [
{
  info: {
    category: 'Design',
    course: 'The Python Mega Course: Build 10 Real World Applications',
    Instructor: {
      image: 'assets/kevin.jpg',
      name: 'Kevin Gilbert'
    },
    Rating: {
      stars: 5.0,
      count: 357.914
    }
  },
  funFact: {
    students: 265.7,
    level: 'Beginner',
    duration: 6
  },
  Price_discount: {
    price: {
      price_after:14.00,
      price_before: 26.00
    },
    discount: 56
  },
  what_learn: [
    "Learn to use Python professionally, learning both Python 2 and Python 3!",
    "Create games with Python, like Tic Tac Toe and Blackjack!",
    "Create games with Python, like Tic Tac Toe and Blackjack!"
  ]
},
{
  info: {
    category: 'IT & Software',
    course: 'Facebook Ads & Facebook Marketing MASTERY 2021 Cours...',
    Instructor: {
      image: 'assets/kevin.jpg',
      name: 'Kevin Gilbert'
    },
    Rating: {
      stars: 5.0,
      count: 357.914
    }
  },
  funFact: {
    students: 265.7,
    level: 'Beginner',
    duration: 6
  },
  Price_discount: {
    price: {
      price_after:14.00,
      price_before: 26.00
    },
    discount: 56
  },
  what_learn: [
    "Learn to use Python professionally, learning both Python 2 and Python 3!",
    "Create games with Python, like Tic Tac Toe and Blackjack!",
    "Create games with Python, like Tic Tac Toe and Blackjack!"
  ]
},
{
  info: {
    category: 'Development',
    course: '2021 Complete Python Bootcamp From Zero to Hero in Python',
    Instructor: {
      image: 'assets/kevin.jpg',
      name: 'Kevin Gilbert'
    },
    Rating: {
      stars: 5.0,
      count: 357.914
    }
  },
  funFact: {
    students: 265.7,
    level: 'Beginner',
    duration: 6
  },
  Price_discount: {
    price: {
      price_after:14.00,
      price_before: 26.00
    },
    discount: 56
  },
  what_learn: [
    "Learn to use Python professionally, learning both Python 2 and Python 3!",
    "Create games with Python, like Tic Tac Toe and Blackjack!",
    "Create games with Python, like Tic Tac Toe and Blackjack!"
  ]
},
{
  info: {
    category: 'Marketing',
    course: 'How to get Diamond in soloQ | League of Legends | Season 11',
    Instructor: {
      image: 'assets/kevin.jpg',
      name: 'Kevin Gilbert'
    },
    Rating: {
      stars: 5.0,
      count: 357.914
    }
  },
  funFact: {
    students: 265.7,
    level: 'Beginner',
    duration: 6
  },
  Price_discount: {
    price: {
      price_after:14.00,
      price_before: 26.00
    },
    discount: 56
  },
  what_learn: [
    "Learn to use Python professionally, learning both Python 2 and Python 3!",
    "Create games with Python, like Tic Tac Toe and Blackjack!",
    "Create games with Python, like Tic Tac Toe and Blackjack!"
  ]
}
]

const courseHTML = function (obj) {
  return `<div class="space-y-[17px]"> 
                <div class="space-y-[8px] px-[20px]">
                  <div class="flex-between">
                    <span class="tag-secondary-100 label-sm">${obj.info.category}</span>
                  </div>
                  <p class="body-lg-500 group-hover:text-primary-500 transition">${obj.info.course}</p>
                </div>
                <div class="flex-between px-[20px]">
                  <div class="flex-center gap-[12px]">
                    <img src="${obj.info.Instructor.image}" class="w-[28px] rounded-full" alt="">
                    <span class="body-md-400 text-gray-scale-700">${obj.info.Instructor.name}</span>
                  </div>

                  <div class="flex-center gap-[5px]">
                    <svg class="text-Warning-500 w-[16px] h-[16px]" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.27569 11.9208L11.4279 13.9179C11.8308 14.1732 12.3311 13.7935 12.2115 13.3232L11.3008 9.74052C11.2752 9.64073 11.2782 9.53573 11.3096 9.4376C11.3409 9.33946 11.3994 9.25218 11.4781 9.18577L14.3049 6.83306C14.6763 6.52392 14.4846 5.90751 14.0074 5.87654L10.3159 5.63696C10.2165 5.62986 10.1211 5.59465 10.0409 5.53545C9.96069 5.47625 9.89896 5.39548 9.86289 5.30255L8.48612 1.83549C8.44869 1.73685 8.38215 1.65194 8.29532 1.59201C8.2085 1.53209 8.1055 1.5 8 1.5C7.89451 1.5 7.79151 1.53209 7.70468 1.59201C7.61786 1.65194 7.55131 1.73685 7.51389 1.83549L6.13712 5.30255C6.10104 5.39548 6.03932 5.47625 5.95912 5.53545C5.87892 5.59465 5.78355 5.62986 5.68412 5.63696L1.99263 5.87654C1.51544 5.90751 1.32373 6.52392 1.69515 6.83306L4.52186 9.18577C4.60063 9.25218 4.65907 9.33946 4.69044 9.4376C4.72181 9.53573 4.72485 9.64073 4.6992 9.74052L3.85459 13.063C3.71111 13.6274 4.31143 14.083 4.79495 13.7767L7.72431 11.9208C7.8067 11.8683 7.90234 11.8405 8 11.8405C8.09767 11.8405 8.19331 11.8683 8.27569 11.9208Z"
                        fill="currentColor" />
                    </svg>
                    <span class="body-md-500">${(obj.info.Rating.stars).toFixed(1)}</span><span class="body-md-500 text-gray-scale-500"> (${obj.info.Rating.count})</span>

                  </div>
                </div>
                
                <div class="flex-between body-meduim-400 px-[20px]">
                  <div class="flex-center gap-[6px]">
                    <img src="assets/User.png" alt="">
                    <span class="text-gray-scale-700 body-md-500">${obj.funFact.students}</span>
                    <span class="text-gray-scale-500 body-md-400"> students</span>
                  </div>

                  <div class="flex-center gap-[6px]">
                    <img src="assets/bar-chart.png" alt="">
                    <span class="body-md-400 text-gray-scale-700">${obj.funFact.level}</span>
                  </div>

                  <div class="flex-center gap-[6px]">
                    <img src="assets/Clock.png" alt="">
                    <span class="body-md-400 text-gray-scale-700">${obj.funFact.duration} hour</span>
                  </div>
                </div>

                <div class="flex justify-between items-center px-[20px]">
                  <div class="flex gap-[10px]">
                    <div>
                      <span class="body-xxl-400">$${(obj.Price_discount.price.price_after).toFixed(2)}</span>
                      <span class="body-md-400 text-gray-scale-400 line-through"> $${(obj.Price_discount.price.price_before).toFixed(2)}</span>
                    </div>
                    <span class="btn-secondary-primary label-lg px-[12px] flex-center h-[30px]">${obj.Price_discount.discount}% off</span>
                  </div>
                  <div class="icon-btn-primary-primary">
                    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.125 17.25C10.125 17.25 0.75 12 0.75 5.62501C0.750191 4.49826 1.14061 3.40635 1.85489 2.53493C2.56916 1.66351 3.5632 1.06636 4.66799 0.845015C5.77278 0.623669 6.92014 0.791788 7.91499 1.32079C8.90984 1.84979 9.69077 2.70702 10.125 3.74673L10.125 3.74673C10.5592 2.70702 11.3402 1.84979 12.335 1.32079C13.3299 0.79179 14.4772 0.62367 15.582 0.845015C16.6868 1.06636 17.6808 1.66351 18.3951 2.53493C19.1094 3.40635 19.4998 4.49826 19.5 5.62501C19.5 12 10.125 17.25 10.125 17.25Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </div>
                </div>
                <div class="hr"></div>

                <div class="space-y-[8px] px-[20px]">
                  <p class="label-md">What you’ll learn</p>
                  <div class="space-y-[8px]">
                    <div class="flex gap-[8px]">
                      <span class="py-[6px] px-[4px]">
                        <svg class="item-start w-[15px] h-[10px]" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 0.75L6 11.2495L0.75 6" stroke="#23BD33" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                      </span>

                      <p class="body-md-400 text-gray-scale-600">${obj.what_learn[0]}</p>
                    </div>
                    <div class="flex gap-[8px]">
                      <span class="py-[6px] px-[4px]">
                        <svg class="item-start w-[15px] h-[10px]" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 0.75L6 11.2495L0.75 6" stroke="#23BD33" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                      </span>
                      <p class="body-md-400 text-gray-scale-600">${obj.what_learn[1]}</p>
                    </div>
                    <div class="flex gap-[8px]">
                      <span class="py-[6px] px-[4px]">
                        <svg class="item-start w-[15px] h-[10px]" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 0.75L6 11.2495L0.75 6" stroke="#23BD33" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                      </span>

                      <p class="body-md-400 text-gray-scale-600">${obj.what_learn[2]}</p>
                    </div>
                  </div>
                </div>
                <div class="hr"></div>
                <div class="px-[20px] space-y-[12px]">
                  <button class="btn-md btn-primary-primary btn-icon-right w-full justify-center flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5Z"
                        fill="white" stroke="white" stroke-width="1.5" />
                      <path
                        d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                        fill="white" />
                      <path
                        d="M3.96429 6.75H20.7857L18.3108 15.4121C18.2213 15.7255 18.0321 16.0012 17.7718 16.1975C17.5116 16.3938 17.1945 16.5 16.8685 16.5H7.88145C7.55549 16.5 7.23839 16.3938 6.97816 16.1975C6.71792 16.0012 6.52872 15.7255 6.43917 15.4121L3.04827 3.54396C3.0035 3.38725 2.90889 3.24939 2.77878 3.15124C2.64866 3.05309 2.49011 3 2.32713 3H0.75"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span>Add to Cart</span></button>
                  <button class="btn-md btn-secondary-primary w-full">Course Detail</button>
                </div>
      </div>`
}

document.querySelectorAll(".Hovercourse").forEach((card, index) => {
  card.addEventListener("mouseenter", function () {
    const obj = arr_courses[index];
    const popup = this.querySelector(".js_popup");

    

    popup.innerHTML = courseHTML(obj);
    this.querySelector(".hide_element").classList.remove("hidden");
  });

  card.addEventListener("mouseleave", function () {
    this.querySelector(".hide_element").classList.add("hidden");
  });
});



