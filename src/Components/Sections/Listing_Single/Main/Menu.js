import React from 'react';

import menu1 from '../../../../Assets/images/all/menu/1.jpg';

const Menu = () => {

    return (

        <div className="list-single-main-item fl-wrap block_box" id="sec4">
            <div className="list-single-main-item-title">
                <h3>Restaurant Menu</h3>
            </div>
            <div className="list-single-main-item_content fl-wrap">
                <div className="menu-filters">
                    <a href="#" className="gallery-filter  menu-filters-active" data-filter="*">All</a>
                    <a href="#" className="gallery-filter" data-filter=".main">Main</a>
                    <a href="#" className="gallery-filter" data-filter=".dessert">Dessert</a>
                    <a href="#" className="gallery-filter" data-filter=".lunch">Lunch</a>
                </div>
                <div className="restor-menu-widget fl-wrap">
                    {/*restmenu-item*/}
                    <div className="restmenu-item main">
                        <a href={menu1} className="restmenu-item-img image-popup">
                            <img src={menu1} alt="" />
                        </a>
                        <div className="restmenu-item-det">
                            <div className="restmenu-item-det-header fl-wrap">
                                <h4>Calabrian Black Sausage</h4>
                                <div className="restmenu-item-det-price">$28.00</div>
                            </div>
                            <p>Netus et malesuada fames ac turpis egestas.</p>
                        </div>
                    </div>
                    {/*restmenu-item end*/}
                    {/*restmenu-item*/}
                    <div className="restmenu-item dessert">
                        <a href={menu1} className="restmenu-item-img image-popup">
                            <img src={menu1} alt="" />
                        </a>
                        <div className="restmenu-item-det">
                            <div className="restmenu-item-det-header fl-wrap">
                                <h4>Grilled Filet of Cod</h4>
                                <div className="restmenu-item-det-price">$38.10</div>
                            </div>
                            <p>Aliquam at vestibulum urna, vitae tincidunt</p>
                        </div>
                    </div>
                    {/*restmenu-item end*/}
                    {/*restmenu-item*/}
                    <div className="restmenu-item main">
                        <a href={menu1} className="restmenu-item-img image-popup">
                            <img src={menu1} alt="" />
                        </a>
                        <div className="restmenu-item-det">
                            <div className="restmenu-item-det-header fl-wrap">
                                <h4>Saute Filet of Seabass</h4>
                                <div className="restmenu-item-det-price">$12.70</div>
                            </div>
                            <p>Fusce vitae dui iaculis leo porta ultrices.</p>
                        </div>
                    </div>
                    {/*restmenu-item end*/}
                    {/*restmenu-item*/}
                    <div className="restmenu-item main lunch">
                        <a href={menu1} className="restmenu-item-img image-popup">
                            <img src={menu1} alt="" />
                        </a>
                        <div className="restmenu-item-det">
                            <div className="restmenu-item-det-header fl-wrap">
                                <h4>Saute Crispy Goats</h4>
                                <div className="restmenu-item-det-price">$8.00</div>
                            </div>
                            <p>Etiam fermentum justo nec auctor pretium.</p>
                        </div>
                    </div>
                    {/*restmenu-item end*/}
                    {/*restmenu-item*/}
                    <div className="restmenu-item lunch">
                        <a href={menu1} className="restmenu-item-img image-popup">
                            <img src={menu1} alt="" />
                        </a>
                        <div className="restmenu-item-det">
                            <div className="restmenu-item-det-header fl-wrap">
                                <h4>La Fromagerie</h4>
                                <div className="restmenu-item-det-price">$18.20</div>
                            </div>
                            <p>Pellentesque placerat turpis turpis eget.</p>
                        </div>
                    </div>
                    {/*restmenu-item end*/}
                    {/*restmenu-item*/}
                    <div className="restmenu-item dessert">
                        <a href={menu1} className="restmenu-item-img image-popup">
                            <img src={menu1} alt="" />
                        </a>
                        <div className="restmenu-item-det">
                            <div className="restmenu-item-det-header fl-wrap">
                                <h4>Warm Chocolate Pudding</h4>
                                <div className="restmenu-item-det-price">$9.30</div>
                            </div>
                            <p>Pellentesque habitant morbi tristique.</p>
                        </div>
                    </div>
                    {/*restmenu-item end*/}
                </div>
                <a href="#" className="btn color2-bg   float-btn">Download PDF<i className="fal fa-file-pdf"/></a>
            </div>
        </div>

    );
};

export default Menu;