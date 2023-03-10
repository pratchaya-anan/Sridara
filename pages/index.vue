
<template>
<section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    <div class="mx-auto max-w-screen-x px- lg:px-">
      


        <!-- Start coding here -->
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
               
            
                <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    
                    <div class="flex items-center space-x-3 w-full md:w-auto">
                     
                        <div id="actionsDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">ลําดับ</th>
                            <th scope="col" class="px-4 py-3">ชื่อภาษาไทย</th>
                            <th scope="col" class="px-4 py-3">Name</th>
                            <th scope="col" class="px-4 py-3">NO.passport</th>
                            <th scope="col" class="px-4 py-3">วันที่ออก</th>
                            <th scope="col" class="px-4 py-3">วันที่หมด</th>
                            <th scope="col" class="px-4 py-3">ว/ด/ป</th>
                            <th scope="col" class="px-4 py-3">สถานที่เกิด</th>
                            <th scope="col" class="px-4 py-3">ห้อง</th>
                            <th scope="col" class="px-4 py-3">หมายเหตุ</th>
                            <th scope="col" class="px-4 py-3">หมายเหตุ</th>
                            <th scope="col" class="px-4 py-3">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                            <td class="px-4 py-3">นายเกรียงไกร กีรตินันท์วัฒน์</td>
                            <td class="px-4 py-3">MR.Kriangkrai keeratinawnwatthana</td>
                            <td class="px-4 py-3">AC3182097</td>
                            <td class="px-4 py-3">24-May-22</td>
                            <td class="px-4 py-3">23-May-32</td>
                            <td class="px-4 py-3">xxxx1957</td>
                            <td class="px-4 py-3">Ubon</td>
                            <td class="px-4 py-3"></td>
                            <td class="px-4 py-3"></td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                
                                <div id="apple-imac-27-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">2</th>
                            <td class="px-4 py-3">นางสุดารัตน์ กีรตินันท์วัฒน์</td>
                            <td class="px-4 py-3">MR.S,Sudarat keeratinawnwatthana</td>
                            <td class="px-4 py-3">AC3182118</td>
                            <td class="px-4 py-3">24-May-22</td>
                            <td class="px-4 py-3">23-May-32</td>
                            <td class="px-4 py-3">xxxx1959</td>
                            <td class="px-4 py-3">mukdahan</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                               
                                <div id="apple-imac-20-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-20-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">3</th>
                            <td class="px-4 py-3">นายณัฐพงษ์ บุญวิทย์</td>
                            <td class="px-4 py-3">MR.Natthapong Boonwit</td>
                            <td class="px-4 py-3">AC9997205</td>
                            <td class="px-4 py-3">24-Aug-18</td>
                            <td class="px-4 py-3">22-Aug-23</td>
                            <td class="px-4 py-3">15-Aug-49</td>
                            <td class="px-4 py-3">Ubon</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                
                                <div id="apple-iphone-14-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-iphone-14-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">4</th>
                            <td class="px-4 py-3">นางสาวพรทิพย์ เรืองกิจวณิช</td>
                            <td class="px-4 py-3">Miss.Phomthip Ruangkiwant</td>
                            <td class="px-4 py-3">AA9997205</td>
                            <td class="px-4 py-3">23-Aug-18</td>
                            <td class="px-4 py-3">22-Aug-23</td>
                            <td class="px-4 py-3">21-Nov-60</td>
                            <td class="px-4 py-3">Ubon</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                
                                <div id="apple-ipad-air-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-ipad-air-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">5</th>
                            <td class="px-4 py-3">นายโชติพัฒน์ สว่างจรัญพัฒน์</td>
                            <td class="px-4 py-3">MR.Chotiphat Savangcharanphat</td>
                            <td class="px-4 py-3">AC3539747</td>
                            <td class="px-4 py-3">5-Jul-22</td>
                            <td class="px-4 py-3">4-Jul-32</td>
                            <td class="px-4 py-3">xxxx1953</td>
                            <td class="px-4 py-3">Nakhonphano</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                
                                <div id="xbox-series-s-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="xbox-series-s-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">6</th>
                            <td class="px-4 py-3">นางกมล สว่างวัฒนศิริ</td>
                            <td class="px-4 py-3">MRS.Kamol Sawangwattanasiri</td>
                            <td class="px-4 py-3">AC3539829</td>
                            <td class="px-4 py-3">5-Jul-22</td>
                            <td class="px-4 py-3">4-Jul-32</td>
                            <td class="px-4 py-3">16-Oct-55</td>
                            <td class="px-4 py-3">Nakhonphano</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                              
                                <div id="playstation-5-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="playstation-5-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">7</th>
                            <td class="px-4 py-3">นายอธิวัฒน์ รังสรรค์วิวัฒน์</td>
                            <td class="px-4 py-3">MR.Athiwat Ruangwiwat</td>
                            <td class="px-4 py-3">AC2900599</td>
                            <td class="px-4 py-3">24-Feb-22</td>
                            <td class="px-4 py-3">23-Feb-32</td>
                            <td class="px-4 py-3">3-Aug-61</td>
                            <td class="px-4 py-3">Nakhonphano</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                               
                                <div id="xbox-series-x-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="xbox-series-x-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">8</th>
                            <td class="px-4 py-3">นางวิจิตร ดาววงค์</td>
                            <td class="px-4 py-3">MRS.Wijit Daowong</td>
                            <td class="px-4 py-3">AC2900029</td>
                            <td class="px-4 py-3">22-Feb-22</td>
                            <td class="px-4 py-3">21-Feb-22</td>
                            <td class="px-4 py-3">24-Mar-61</td>
                            <td class="px-4 py-3">Nakhonphano</td>
                         
                            <td class="px-4 py-3 flex items-center justify-end">
                             
                                <div id="apple-watch-se-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-watch-se-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">9</th>
                            <td class="px-4 py-3">นายวิน กีรตินันท์วัฒน์</td>
                            <td class="px-4 py-3">MR.Win keeratinawnwatthana</td>
                            <td class="px-4 py-3">AC4222868</td>
                            <td class="px-4 py-3">31-Jan-20</td>
                            <td class="px-4 py-3">30-Jan-25</td>
                            <td class="px-4 py-3">xxxx1961</td>
                            <td class="px-4 py-3">Ubon</td>

                            <td class="px-4 py-3 flex items-center justify-end">
                                
                                <div id="nikon-d850-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="nikon-d850-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">10</th>
                            <td class="px-4 py-3">นายเจษฎา สุวรรณ์</td>
                            <td class="px-4 py-3">MR.Chetsada Suwan</td>
                            <td class="px-4 py-3">AC4222867</td>
                            <td class="px-4 py-3">31-Jan-20</td>
                            <td class="px-4 py-3">30-Jan-25</td>
                            <td class="px-4 py-3">21-Dec-94</td>
                            <td class="px-4 py-3">Amnat</td>

                        
                            <td class="px-4 py-3 flex items-center justify-end">
                                    
                                <div id="benq-ex2710q-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="benq-ex2710q-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">11</th>
                            <td class="px-4 py-3">นางนิตยา ธนฐิติวงศ์</td>
                            <td class="px-4 py-3">MRS.Nittaya Thanathitiwong</td>
                            <td class="px-4 py-3">AC4064234</td>
                            <td class="px-4 py-3">20-Sep-22</td>
                            <td class="px-4 py-3">19-Sep-32</td>
                            <td class="px-4 py-3">xxxx1953</td>
                            <td class="px-4 py-3">Ubon</td>

                            <td class="px-4 py-3 flex items-center justify-end">
                                
                                <div id="nikon-d850-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="nikon-d850-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">12</th>
                            <td class="px-4 py-3">นางสาวรัสริทนร์ กุลนันท์ชยานนท์</td>
                            <td class="px-4 py-3">Miss.Ratsarin Kunlananchayanon</td>
                            <td class="px-4 py-3">AC3359917</td>
                            <td class="px-4 py-3">14-Jan-22</td>
                            <td class="px-4 py-3">4-Jan-28</td>
                            <td class="px-4 py-3">1-Sep-63</td>
                            <td class="px-4 py-3">Nakhonphano</td>

                            <td class="px-4 py-3 flex items-center justify-end">
                                
                                <div id="nikon-d850-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="nikon-d850-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">9</th>
                            <td class="px-4 py-3">นายเเดง กุลจิตติเพรช</td>
                            <td class="px-4 py-3">MR.Dacng Kunjittipech</td>
                            <td class="px-4 py-3">AC0600909</td>
                            <td class="px-4 py-3">5-Jan-23</td>
                            <td class="px-4 py-3">4-Jan-28</td>
                            <td class="px-4 py-3">xxxx1954</td>
                            <td class="px-4 py-3">Ubon</td>

                            <td class="px-4 py-3 flex items-center justify-end">
                                
                                <div id="nikon-d850-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="nikon-d850-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">13</th>
                            <td class="px-4 py-3"> บุตตะ</td>
                            <td class="px-4 py-3">MISS.Sasithon butta</td>
                            <td class="px-4 py-3">AC2258136</td>
                            <td class="px-4 py-3">5-May-21</td>
                            <td class="px-4 py-3">4-May-31</td>
                            <td class="px-4 py-3">13-Jan-76</td>
                            <td class="px-4 py-3">Bangkok</td>

                            <td class="px-4 py-3 flex items-center justify-end">
                                
                                <div id="nikon-d850-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="nikon-d850-dropdown-button">
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    
                                    <div class="py-1">
                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
           
        </div>
    </div>
    </section>
</template>


<script>
export default {
  data() {
    return {
      desserts: [
        {
          no: 1,
          name: "สวัสดี หมีหอม",
          Id: 1234567891234,
          family_name: "อะไรไม่รู้",
          passport: 25885455866,
          created_at: "25/05/66",
          expired_at: "25/05/66",
          dob: "25/05/66",
          nationality: "TH",
          gender: "ชาย",
          bed_type: "คู่",
          no_check: 15,
        },
      ],
    };
  },
};
</script>

<style scoped>
.text-head-table {
  font-size: 15px;
}
</style>
