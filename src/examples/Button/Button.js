import React, { useState, useRef, useEffect } from 'react';
export const Button = (props) =>
{
    

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div>Basic</div>
                    </div>
                    <div className="col-md-9">
                        <Button id="100" mode="primary" type="submit" text="Basic" title="tooltip" ariaLabel="submit button"/>&nbsp;
                        <Button id="101" mode="primary" type="submit" text="Disabled" disabled={true}/> &nbsp;
                        <Button id="102" mode="primary" type="button" text="Link" url="https://www.angularjswiki.com" urlTarget="_self"/>
                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <div>Icons</div>
                    </div>
                    <div className="col-md-9">
                        <Button id="103" mode="primary" type="submit" icon="fa fa-home"/> &nbsp;
                        <Button id="104" mode="primary" text="Go" type="submit" icon="fa fa-home" iconPos="left"/>
                        <Button id="105" mode="primary" text="Go" type="submit" icon="fa fa-home" iconPos="right" iconColor="yellow"/>

                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <div>Badges</div>
                    </div>
                    <div className="col-md-9">
                        <Button id="106" mode="primary" type="submit" text="Go" badge="10" badgeclassNameName="yBadge" />
                        <Button id="107" mode="primary" type="submit" text="Go" icon="fa fa-bell"
                        iconPos="left" badge="10" badgeclassNameName="yBadge yBadgeSecondary"/>                       
                        <Button id="108" mode="primary" type="submit" icon="fa fa-bell" iconPos="left"
                        badge="10" badgeclassNameName="yBadge yBadgeSecondary"/>
                    </div>
                </div>
                <hr />


                <div className="row">
                    <div className="col-md-3">
                        <div>Rounded Buttons</div>
                    </div>
                    <div className="col-md-9">
                        <Button id="109" mode="primary-rounded" type="submit" text="Primary" />
                        <Button id="110" mode="secondary-rounded" type="submit" text="Secondary"/>
                        <Button id="111" mode="success-rounded" type="submit" text="Success"/>
                        <Button id="112" mode="warning-rounded" type="submit" text="Warning"/>
                        <Button id="113" mode="danger-rounded" type="submit" text="Danger"/>
                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <div>Button Size</div>
                    </div>
                    <div className="col-md-9">
                        <Button id="114" mode="primary-rounded y-btn-sm" type="submit" text="Small" />
                        <Button id="115" mode="secondary-rounded" type="submit" text="Normal" />
                        <Button id="116" mode="success-rounded y-btn-lg" type="submit" text="Large" />
                    </div>
                </div>
                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <div>Button Set</div>
                    </div>
                    <div className="col-md-9">
                        <Button id="117" mode="primary y-btn-group" type="submit" text="Save" />
                        <Button id="118" mode="primary y-btn-group" type="submit" text="Delete"/>
                        <Button id="119" mode="primary y-btn-group" type="submit" text="Cancel" />
                    </div>
                </div>

            </div>
        </>
    )
};
