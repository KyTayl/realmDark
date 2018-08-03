// ==UserScript==
// @name     SPC Dark Theme
// @description  Makes realm actually useful!
// @namespace    http://tampermonkey.net/
// @author       Kye Taylor
// @version      1.0.2
// @updateURL    https://raw.githubusercontent.com/KyTayl/realmDark/master/user.js
// @downloadURL  https://raw.githubusercontent.com/KyTayl/realmDark/master/user.js
// @include  https://realm.stpatricks.qld.edu.au/*
// @grant    GM_addStyle
// ==/UserScript==

function hide(e) {
    var x = document.getElementById(e);
    if(x){
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}
hide("component4669"); // Hello (Name)
hide("component15384"); // Large Boxes
hide("component4670"); // News
hide("footer"); // Footer


GM_addStyle ( `
    /*
----------Colours--------
#3e3e3e - Background
#FD0000 - Red

*/

/* Icon Colour */
[class^="icon-"], [class*=" icon-"] {
color: #FFFFFF !important;
}

/*Body Background*/
body {
background: #3e3e3e !important;
}

/*Events Text*/

ul.calendar-list div.small-8.column {
color: #000000 !important;
}

/*Events Date*/

ul.calendar-list div.small-4.column {
color: #FD0000 !important;
font-weight: 600 !important;
}

/*Links*/
a {
color: #FFFFFF !important;
}

.subheader{
color: #bbbbbb !important;
}

/*Timetable Table Background*/
table tr th, table tr td {
color: #bbb !important;
background-color: #3e3e3e !important;
}

/*Timetable Table Border*/
.timetable td, .timetable th, .timetable-small td, .timetable-small th {
border: 1px solid #333 !important;
}

/*Most Table Borders*/
.information-list>li, .activity-list>li, .subject-list>li, .news-list>li, .weather-list>li, .weather-list-summary>li, .permission-list>li, .action-list>li, .resource-list>li, ul.az-list>li, ul.az-error-list>li, .marking-input-list>li, .calendar-list>li, .component-titlebar>li {
border-bottom: 1px solid #333 !important;
}

/*Timetable Table Subject Background*/
div.timetable-subject {
background: #444444 !important;
height: 105px !important;
}

/*Title With Name*/
h1{
color: #FFFFFF !important;
}

/*UNKNOWN*/
.list-item{
color: #FFFFFF !important;
}

/*News Headlines*/
.tabs-content{
background-color: #444444 !important;
color: #BBBBBB !important;
}

/*Logo*/
.logo-wrapper {
height: 4.5rem !important;
width: 16.25rem !important;
background: url(https://image.ibb.co/c4yQWy/realmlogo.png) no-repeat center !important;
background-size: 16.25rem 4.5rem !important;
position: relative !important;
z-index: 2 !important;
}

/*Logo Image*/
.logo-wrapper img {
height: 1rem !important;
width: 16.25rem !important;
opacity: 0 !important;
position: relative !important;
z-index: 3 !important;
}

/*Small Logo
a.logo {
height: 4.5rem !important;
width: 4.5rem !important;
background: url(https://preview.ibb.co/fug3cc/small_Logo.png) no-repeat center !important;
background-size: 4.5rem 4.5rem !important;
position: relative !important;
z-index: 1 !important
}

a.logo img {
height: 1rem !important;
width: 4.5rem !important;
opacity: 0 !important;
position: relative !important;
z-index: 0 !important
}
*/

/*Left Menu*/
.left-off-canvas-menu {
background: #333333 !important;
}

/*Hover On Account Name Left Menu*/
.left-off-canvas-menu .account-menu .accordion-navigation:hover .profile-drop{
background-color: #222222 !important;
}

/*Hover On Not-Account Name Left Menu*/
.left-off-canvas-menu ul.off-canvas-list li a:hover {
color: #fff !important;
background-color: #222222 !important;
}

/*Account Menu - Non Picture*/
.left-off-canvas-menu .account-menu .content a, .left-off-canvas-menu .account-menu .resource-browser .meta-panel a, .resource-browser .left-off-canvas-menu .account-menu .meta-panel a, .left-off-canvas-menu .account-menu .matching-pairs p a, .matching-pairs .left-off-canvas-menu .account-menu p a, .left-off-canvas-menu .account-menu .calendar-list label a, .calendar-list .left-off-canvas-menu .account-menu label a, .left-off-canvas-menu .account-menu .calendar-list li.row a, .calendar-list .left-off-canvas-menu .account-menu li.row a {
background-color: #333333 !important;
}

/*Account Menu - Non Picture :hover*/
.left-off-canvas-menu .account-menu .content a:hover, .left-off-canvas-menu .account-menu .resource-browser .meta-panel a:hover, .resource-browser .left-off-canvas-menu .account-menu .meta-panel a:hover, .left-off-canvas-menu .account-menu .matching-pairs p a:hover, .matching-pairs .left-off-canvas-menu .account-menu p a:hover, .left-off-canvas-menu .account-menu .calendar-list label a:hover, .calendar-list .left-off-canvas-menu .account-menu label a:hover, .left-off-canvas-menu .account-menu .calendar-list li.row a:hover, .calendar-list .left-off-canvas-menu .account-menu li.row a:hover {
background-color: #222222 !important;
}

/*Account Menu - Picture Non-Hover*/
.left-off-canvas-menu .account-menu .accordion-navigation.active .profile-drop {
background-color: #222222;
}

/*Left Side Account Panel Hover MidColour*/
.left-off-canvas-menu .account-menu:hover {
background-color: #333333;
}

/*Left Side Heading*/
#nav ul.off-canvas-list li h3 {
color: #FFFFFF;
font-family: "verdana";
font-weight: 600;
}

/*Left Submenu Colour*/
.left-off-canvas-menu .left-submenu {
background-color: #333333;
color: #FFFFFF;
}

/*Left Submenu Back Button*/
.left-off-canvas-menu .left-submenu .back>a {
color: #FFFFFF;
background-color: #444444;
}

/*Top Menu*/
.tab-bar-section, .right-off-canvas-toggle{
background: #333333 !important;
}

/*Top Menu - Hover*/
.hybrid-bar ul li a:hover {
background-color: #222222;
}

/*Top Menu - Selected*/
.hybrid-bar ul li a.navthis {
background-color: #3e3e3e;
}

/*Search Bar*/
.hybrid-bar #search [type="text"]:focus, .hybrid-bar #search [type="text"]:active, .hybrid-bar #search:hover [type="text"], .hybrid-bar #search:hover [type="text"]:focus {
background-color: #FFFFFF !important;
border: 2px solid #000000 !important;
color: #000000 !important;
}

/*Search Bar - Search Button*/
.hybrid-bar #search [type="text"]:focus+.icon-search:before, .hybrid-bar #search [type="text"]:active+.icon-search:before, .hybrid-bar #search:hover .icon-search:before {
color: #000000 !important;
}

/*Notifications*/
.off-canvas-list li label{
background: #333333 !important;
color: #FFFFFF !important;
}

/*Notifications - Large Screen*/
.right-small a {
background: #333333 !important;
}

/*Notifications - Side Bar*/
#msg-content{
background: #444444 !important;
color: #FFFFFF !important;
}

.right-off-canvas-menu.overlap {
background: #444444 !important;
}

/*Notifications - See All Button*/
.off-canvas-list .button{
background: #333333 !important;
}

/*Photos Background*/
#component4669 section{
background: #3e3e3e !important;
}

/*News Headlines Selector*/
.tabs dd.active:not dd a{
background: #000000 !important;
}

/*News Headlines Background Fix*/
.island section {
background-color: #3e3e3e !important;
}

/*News Headlines Active*/
.tabs dd.active>a, .tabs .tab-title.active>a{
background: #FFFFFF !important;
color: #111111 !important;
}

/*News Headlines Inactive*/
.tabs dd>a, .tabs .tab-title>a {
background-color: #333333 !important;
color: #FFFFFF !important;
}

/*News Headlines Hover*/
.tabs dd>a:hover, .tabs .tab-title:hover>a {
background-color: #444444 !important;
color: #FFFFFF !important;
}

/*Tiles*/
.tileList li span {
color: rgba( 249, 249, 249, 0.9 ) !important;
background-color: rgba( 50, 50, 50, 0.7 ) !important;
}

/*Tiles - Hover*/
.tile-link:hover{
background-color: rgba( 50, 50, 50, 0.3 ) !important;
}

/*Due Work*/
.information-list{
background-color: #444444 !important;
color: #FFFFFF !important;
}

/*Due Work - Due Date Colour*/
div.card.small-12 span{
color: #FD0000 !important;
}

/*       CLASSES         */

/*Select Box*/
select {
background: #333333 !important;
border-color: #000000 !important;
color: #FFFFFF !important;
}

/*Arrows to change date*/
.button, .context-switch nav a, .avatar-switch nav a, .attachzone .dzone.button, .dropzone-wrap .dzone.button, button, input[type="submit"], a.submit, button.submit, .flex-list.buttons a.submit, .flex-list.buttons a, .adtp-btn{
background: #111111 !important;
}

/*Arrows to change date - hover*/
.button:hover, .context-switch nav a:hover, .avatar-switch nav a:hover, .attachzone .dzone.button:hover, .dropzone-wrap .dzone.button:hover, button:hover, input[type="submit"]:hover, a.submit:hover, button.submit:hover, .flex-list.buttons a.submit:hover, .flex-list.buttons a:hover, .adtp-btn{
background: #333333 !important;
}

/*Arrows to change date - disabled*/
button.disabled, button[disabled], .button.disabled, .context-switch nav a.disabled, .avatar-switch nav a.disabled, .attachzone .disabled.dzone.button, .dropzone-wrap .disabled.dzone.button, button.disabled, input.disabled[type="submit"], a.disabled.submit, .flex-list.buttons a.disabled, .disabled.adtp-btn, .button[disabled], .context-switch nav a[disabled], .avatar-switch nav a[disabled], .attachzone [disabled].dzone.button, .dropzone-wrap [disabled].dzone.button, button[disabled], input[disabled][type="submit"], a[disabled].submit, .flex-list.buttons a[disabled], [disabled].adtp-btn{
background: #666666 !important;
}

/*More Menu (DOTS)*/
.actions-small-1>nav a[aria-expanded="true"], .island .row.actions-small-1>nav a[aria-expanded="true"] {
background: #333333 !important;
}

/*More Menu (DOTS) - Hover*/
.actions-small-1>nav a[aria-expanded="true"]:hover, .island .row.actions-small-1>nav a[aria-expanded="true"]:hover {
background: #222222 !important;
}

/*More Menu (DOTS) - Menu*/
.f-dropdown {
background: #333333 !important;
}

/*More Menu (DOTS) - Menu Hover*/
.f-dropdown li:hover, .f-dropdown li:focus, .f-dropdown li a:hover {
background: #222222 !important;
}

/*         DUE WORK       */

/*Day Arrows*/
#calendar .calendar-controls button {
color: #FFFFFF !important;
}

/*Day Arrows - Hover*/
#calendar .calendar-controls button:hover, #calendar .calendar-controls button.fc-state-active {
color: #000000 !important;
background: #EEEEEE !important;
}

/*Date Text*/
div.fc-toolbar.fc-header-toolbar.calendar-controls div.fc-center h2 {
color: #FFFFFF !important;
}

/*Datepicker - Header*/
.ui-datepicker-header {
color: #FFFFFF !important;
background: rgba(50, 50, 50, 0.9) !important;
}

/*Datepicker - Body Heading*/
.ui-datepicker-calendar th{
color: #EEEEEE !important;
background: rgba(100, 100, 100, 0.9) !important;
}

/*Datepicker - Body*/
.ui-datepicker-calendar tbody tr td{
color: #000000 !important;
background: rgba(200, 200, 200, 0.9) !important;
}

/*Datepicker - Hover*/
.ui-datepicker-calendar tr a:hover, .ui-datepicker-calendar td.ui-datepicker-current-day {
background: rgba(255, 255, 255, 0.4) !important;
color: #000000 !important;
}

/*Datepicker - Selected*/
.ui-datepicker-calendar thead, .ui-datepicker-calendar tr.even, .ui-datepicker-calendar tr.alt, .ui-datepicker-calendar tr, .ui-datepicker-calendar td, .ui-datepicker-calendar th {
background: #222222 !important;
color: #FFFFFF !important;
}

/*Datepicker - Next/Prev*/
.ui-datepicker-header .ui-datepicker-prev:hover, .ui-datepicker-header .ui-datepicker-next:hover {
background: #222222 !important;
}

/*Datepicker - Table Line*/
.ui-datepicker-buttonpane, .ui-datepicker-calendar {
border-top: solid 1px rgba(0, 0, 0, 0.3) !important;
}

/*Table - Body*/
tbody.fc-body tr td.fc-widget-content div.fc-scroller.fc-day-grid-container div.fc-day-grid.fc-unselectable div.fc-row.fc-week.fc-widget-content td.fc-event-container span.fc-title{
color: #000000 !important;
}

/*Table - Time Due Color*/
tbody.fc-body tr td.fc-widget-content div.fc-scroller.fc-day-grid-container div.fc-day-grid.fc-unselectable div.fc-row.fc-week.fc-widget-content td.fc-event-container span.fc-time{
color: #FD0000 !important;
}

/*Table - Underline (when hovered) Color*/
tbody.fc-body tr td.fc-widget-content div.fc-scroller.fc-day-grid-container div.fc-day-grid.fc-unselectable div.fc-row.fc-week.fc-widget-content td.fc-event-container .fc-event:hover {
text-decoration-color: #000000 !important;
}

/*Table - Body Day Number*/
.fc-day-number{
color: #FFFFFF !important;
}

/*Table - Header Text*/
th.fc-day-header.fc-widget-header{
color: #FFFFFF !important;
}

/*       Grades          */

.link-row:hover {
background: #333333 !important;
}

/*       Timetable         */

/*Table Header Colour*/
table.timetable.no-hover thead tr th:not(.timetable-day-active) {
color: #FFFFFF !important;
}

/*Table Active Day*/
th.timetable-day-active {
color: #000000 !important;
background: #FFFFFF !important;
}

/*       Calendar         */

/*Event Creator Background*/
.reveal-modal {
background: #444444 !important;
}

/*Event Creator Text*/
#createEvent section h3, #createEvent section label {
color: #FFFFFF !important;
}

/*Task Creator Text*/
#createTask section h3, #createTask section label {
color: #FFFFFF !important;
}

/*Event Creator Selected Textbox*/
input:not([type]):focus, input[type="text"]:focus, input[type="password"]:focus, input[type="date"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="month"]:focus, input[type="week"]:focus, input[type="email"]:focus, input[type="number"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="time"]:focus, input[type="url"]:focus, input[type="color"]:focus, textarea:focus {
background-color: #CCCCCC !important;
color: #000 !important;
border-color: #CCCCCC !important;
}

/*Event Creator Hover Textbox*/
input:hover, textarea:hover, select:hover{
background-color: #DDDDDD !important;
color: #000 !important;
border-color: #DDDDDD !important;
}

/*Event Creator Textbox Border*/
input:not([type]), input[type="text"], input[type="password"], input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="month"], input[type="week"], input[type="email"], input[type="number"], input[type="search"], input[type="tel"], input[type="time"], input[type="url"], input[type="color"], textarea {
border-color: #000000 !important;
}

/*More Events (+2 more) Background*/
.fc-unthemed .fc-popover {
background-color: #555555 !important;
}

/*More Events (+2 more) Header*/
.fc-unthemed .fc-divider, .fc-unthemed .fc-list-heading td, .fc-unthemed .fc-popover .fc-header {
background: #333333 !important;
color: #FFFFFF !important;
}

/*More Events (+2 more) Close*/
.fc-unthemed .fc-popover .fc-header .fc-close {
color: #000000 !important;
}

/*Filters Ticks*/
.checklist input[type=radio]:not(.plain):checked+label:before, .checklist input[type=radio]:not(.plain):checked+label:after, .checklist input[type=checkbox]:not(.plain):checked+label:before, .checklist input[type=checkbox]:not(.plain):checked+label:after, .radiolist input[type=radio]:not(.plain):checked+label:before, .radiolist input[type=radio]:not(.plain):checked+label:after, .radiolist input[type=checkbox]:not(.plain):checked+label:before, .radiolist input[type=checkbox]:not(.plain):checked+label:after {
color: #FFFFFF !important;
background: #222222 !important;
}

/*Filters Ticks Hover*/
.checklist input[type=radio]:not(.plain):not(:disabled)+label:hover:before, .checklist input[type=radio]:not(.plain):not(:disabled)+label:hover:after, .checklist input[type=checkbox]:not(.plain):not(:disabled)+label:hover:before, .checklist input[type=checkbox]:not(.plain):not(:disabled)+label:hover:after, .radiolist input[type=radio]:not(.plain):not(:disabled)+label:hover:before, .radiolist input[type=radio]:not(.plain):not(:disabled)+label:hover:after, .radiolist input[type=checkbox]:not(.plain):not(:disabled)+label:hover:before, .radiolist input[type=checkbox]:not(.plain):not(:disabled)+label:hover:after {
background: #333333 !important;
}

/*Filter Ticks Outline*/
.checklist input[type=radio]:not(.plain)+label:before, .checklist input[type=checkbox]:not(.plain)+label:before, .radiolist input[type=radio]:not(.plain)+label:before, .radiolist input[type=checkbox]:not(.plain)+label:before {
background: #000000 !important;
}

/*Today Day Color (black)*/
td.fc-day-top.fc-today.fc-state-highlight span.fc-day-number{
color: #000000 !important;
}

/*Event Information Title*/
div.reveal-modal.open h3{
color: #FFFFFF !important;
}

/*Event Information Information*/
div.reveal-modal.open article p{
color: #BBBBBB !important;
}

/*Week Today (color black)*/
th.fc-day-header.fc-widget-header.fc-today span{
color: #000000 !important;
}

/*Week item text colour*/
div.fc-content-skeleton table tbody tr div.fc-content-col div.fc-content div.fc-title {
color: #000000 !important;
}

/*Week item time colour*/
div.fc-content-skeleton table tbody tr div.fc-content-col div.fc-content div.fc-time span {
color: #FD0000 !important;
}

/*Week item text underline colour*/
.fc-event:hover{
text-decoration-color: #000000 !important;
}

/*          NEWS         */

/*No news text*/
section.main-section div#container div#content div.row div.small-12.island section div.content p, section.main-section div#container div#content div.row div.small-12.island section div.content ul li {
color: #FFFFFF !important;
}

div.row div.small-12.island section.content h3 {
color: #FFFFFF !important;
}

/*       Liberating Education    */

/*Descriptive Text*/
div.component-container.Component_Homepage_TextBoxController div.row div.small-12.island div.content article h1 span, div.component-container.Component_Homepage_TextBoxController div.row div.small-12.island div.content article h2 span, div.component-container.Component_Homepage_TextBoxController div.row div.small-12.island div.content article h3 span, div.component-container.Component_Homepage_TextBoxController div.row div.small-12.island div.content article h4 span, div.component-container.Component_Homepage_TextBoxController div.row div.small-12.island div.content article h5 span, div.component-container.Component_Homepage_TextBoxController div.row div.small-12.island div.content article h6 span, div.component-container.Component_Homepage_TextBoxController div.row div.small-12.island div.content article h1, div.component-container.Component_Homepage_TextBoxController div.row div.small-12.island div.content article h2, div.component-container.Component_Homepage_TextBoxController div.row div.small-12.island div.content article h3, div.component-container.Component_Homepage_TextBoxController div.row div.small-12.island div.content article h4, div.component-container.Component_Homepage_TextBoxController div.row div.small-12.island div.content article h5, div.component-container.Component_Homepage_TextBoxController div.row div.small-12.island div.content article h6, div.component-container.Component_Homepage_TextBoxController div.row div.small-12.island div.content article td p span {
color: #DDDDDD !important;
}

/*Title Bar Background Colour*/
.component-titlebar {
background: #FFFFFF !important;
}

/*Title Bar Text Colour*/
.component-titlebar h2 a {
color: #111111 !important;
}

/*Options Selected*/
.actions-small-4>nav a[aria-expanded="true"], .island .row.actions-small-4>nav a[aria-expanded="true"] {
background: #333333 !important;
}

/*Options Selected Hover*/
.actions-small-4>nav a[aria-expanded="true"]:hover, .island .row.actions-small-4>nav a[aria-expanded="true"]:hover {
background: #111111 !important;
}

/*Options Seperator Text*/
li.separator {
color: #EEEEEE !important;
font-weight: 600 !important;
}

/*Header Image*/
.tileList li span {
color: rgba( 249, 249, 249, 0.9 ) !important;
background: rgba( 50, 50, 50, 0 ) !important;
}

/*        XAVIER HOUSE      */

div.component-container.Schoolbox_News_Component_Homepage_Controller div.row div.small-12.island section ul.information-list li article h3, div.component-container.Schoolbox_News_Component_Homepage_Controller div.row div.small-12.island section ul.information-list li article p span, div.component-container.Schoolbox_News_Component_Homepage_Controller div.row div.small-12.island section ul.information-list li article li span {
color: #DDDDDD !important;
}

/*        SEARCH          */

/*Search Error Text*/
div.small-12.island form[action="/search"] div.content{
color :#e0e0e0 !important;
}

/*Search People Option*/
.sub-nav li.active a, .sub-nav dd.active a {
background: #000000 !important;
}

/*Search People Option :hover*/
.sub-nav li.active a:hover, .sub-nav dd.active a:hover {
background: #000000 !important;
}

/*Search All Option*/
.sub-nav li a, .sub-nav dd a{
background: #333333 !important;
}

/*Search All Option :hover*/
.sub-nav li a:hover, .sub-nav dd a:hover {
background: #000000 !important;
}

ul.pagination li.current a, ul.pagination li.current button{
background: #000000 !important
}

ul.pagination li a, ul.pagination li button{
background: #333333 !important;
}

ul.pagination li:hover a, ul.pagination li a:focus, ul.pagination li:hover button, ul.pagination li button:focus {
background: #000000 !important;
}

/*        PROFILE           */

/*Info Text Colour*/
div.small-12.medium-10.columns.no-pad dl dt, div.small-12.medium-10.columns.no-pad dl dd {
color: #DDDDDD !important;
}

/*        OPTIONS          */

div.small-12.island section p.content {
color: #DDDDDD !important;
}

table#follow-settings tbody tr td label {
color: #FFFFFF !important;
}

table#follow-settings tbody tr td div.long.switch label {
background: #222222 !important;
}

table#follow-settings tbody tr td div.long.switch label:after {
background: #FFFFFF !important;
}

table#follow-settings tbody tr td div.long.switch label span {
color: #FFFFFF !important;
}

ul.permission-list label.content {
color: #DDDDDD !important;
}

ul.permission-list label.input-toggle {
background: #333333 !important;
}

ul.permission-list label.input-toggle:hover {
background: #444444 !important;
}

[class^="icon-"], [class*=" icon-"] {
color: #111111;
}

/*          GLOBAL          */

/*Active Arrow*/
.breadcrumb .active a{
background: #000000 !important;
}

/*Active Arrow Arrow*/
.breadcrumb li a:before {
border-left: 0.4rem solid #000000 !important;
}

/*Inactive Arrow*/
.breadcrumb :not(.active) a{
background: #222222 !important;
}

/*Inactive Arrow Hover*/
.breadcrumb :not(.active) a:hover{
background: #555555 !important;
}

/*Inactive Arrow Arrow*/
.breadcrumb :not(.active) a:after {
border-left: 0.4rem solid #222222 !important;
}

/*Inactive Arrow Arrow Hover*/
.breadcrumb li a:hover:after {
border-left-color: #555555 !important;
}

/*Empty State*/
.empty-state {
background-color: #333333;
color: #FFFFFF;
}

/*Empty State Icon*/
.empty-state [class^="icon-"], .empty-state [class*=" icon-"] {
color: #FFFFFF;
}

/*            LATE EDITS             */
div.small-12.columns div section div.scrollable.show-for-medium-up table.timetable thead tr th {
text-align: center !important;
vertical-align: center !important;
}

.link-row .medium-10.small-8.card p {
vertical-align: center !important;
}

.link-row .medium-10.small-8.card .meta {
display: none !important;
}

div.list-item div.small-12.card p.meta {
display: none !important;
}

div.list-item div.small-12.card a p {
vertical-align: center !important;
}

div.card.small-12 span {
color: #FD0000 !important;
}

li.subject-group div.list-item div.card.small-12:hover{
background-color: #555555 !important
}

/*Arrow Down Fix*/
a.icon-up-arrow.collapse {
background-color: #444444 !important
}

` );
