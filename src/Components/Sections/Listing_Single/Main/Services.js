import React from 'react';

const Services = () => {

    return (

<>
    {/* accordion*/}
            <div class="accordion mar-top" id="services">
        <a class="toggle act-accordion" href="#"> Crossfit<span/></a>
        <div class="accordion-inner visible">
            <h4 class="simple-title">The Trend in Web Design <span>By David Gray</span></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
        </div>
        <a class="toggle" href="#"> Fitness  <span/></a>
        <div class="accordion-inner">
            <h4 class="simple-title">Successful Marketing Strategy <span>By Austin Evon</span></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
        </div>
        <a class="toggle" href="#"> TRX  <span/></a>
        <div class="accordion-inner">
            <h4 class="simple-title">The Results - Closing <span>By Martin Kowalsky</span></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
        </div>
    </div>
    {/* accordion end */}
</>

    );
};

export default Services;