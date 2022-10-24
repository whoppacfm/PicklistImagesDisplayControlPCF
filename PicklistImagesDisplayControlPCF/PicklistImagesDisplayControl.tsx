//-----
//React
//-----
import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react';

//-------------------------
//Testing/System/DataSource
//-------------------------
var DATA_SOURCE = "CRM"
let href = window!.top!.location.href;
if(href.indexOf("127.") > -1 || href.indexOf("localhost") > -1) {
    DATA_SOURCE="TEST";
}
var CRM_TEST_MODE = 0;





//----------------------------
//PicklistImagesDisplayControl
//----------------------------
function PicklistImagesDisplayControl(props:any) {
    
    function _onChange() {
        console.log("_onChange");
    }
    
    return (
        <>
            <div>PicklistImagesDisplayControl</div>
            <ChoiceGroup 
                defaultSelectedKey='B'  
                options={ [ 
                { 
                    key: 'A',  
                    text: 'Option A', 
                    imageSize: {width:800, height:200 },
                    imageAlt: 'test image',
                    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS741Z8dtYr_i8cZPUcWQ4vcKSRjTw7LRWTYg&usqp=CAU',
                    selectedImageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS741Z8dtYr_i8cZPUcWQ4vcKSRjTw7LRWTYg&usqp=CAU'
                }, 
                { 
                    key: 'B',  
                    text: 'Option B', 
                    imageSize: {width:800, height:200 },
                    imageAlt: 'test image',
                    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WOaNcvlegIbjowD895A9T3LBVAh641Ux8Q&usqp=CAU',
                    selectedImageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WOaNcvlegIbjowD895A9T3LBVAh641Ux8Q&usqp=CAU'
                }, 
                { 
                    key: 'C',  
                    text: 'Option C', 
                    imageSize: {width:800, height:200 },
                    imageAlt: 'test image',
                    imageSrc: 'https://www.bmdv.bund.de/SharedDocs/EN/Bilder/DG/digitales.jpg?__blob=normal',
                    selectedImageSrc: 'https://www.bmdv.bund.de/SharedDocs/EN/Bilder/DG/digitales.jpg?__blob=normal'
                }, 
                { 
                    key: 'D',  
                    text: 'Option D', 
                    disabled: true,
                    imageSize: {width:800, height:200 },
                    imageAlt: 'test image',
                    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQR9KUWXEfRz_aT1UMqxTnGY0-MDJHcb7MQ&usqp=CAU',
                    selectedImageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQR9KUWXEfRz_aT1UMqxTnGY0-MDJHcb7MQ&usqp=CAU'
                } 
                ] } 
                onChange={ _onChange } 
                label='Pick one' 
                required={ true } 
            />
        </>
    )
}

export function Render(context:any, container:any, theobj:object) {
    ReactDOM.render(
        <div><PicklistImagesDisplayControl context={context} theobj={theobj} /></div>
      , container
    );
}


