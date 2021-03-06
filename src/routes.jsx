'use strict';

import React from 'react';
import { Link } from 'react-router';
import Grid from 'react-uikit-grid';
import Nav from '../components/react-uikit-nav/src/nav.jsx';
import NavItem from '../components/react-uikit-nav/src/nav-item.jsx';
import uikit from 'react-uikit-base';

// Layout Handlers
import AlertDoc from './alert-doc.jsx';
import ArticleDoc from './article-doc.jsx';
import BadgeDoc from './badge-doc.jsx';
import BaseDoc from './base-doc.jsx';
import BlockDoc from './block-doc.jsx';
import ButtonDoc from './button-doc.jsx';
import ButtonGroupDoc from './button-group-doc.jsx';
import CodeblockDoc from './codeblock-doc.jsx';
import CommentDoc from './comment-doc.jsx';
import CommentListDoc from './comment-list-doc.jsx';
import DropdownDoc from './dropdown-doc.jsx';
import FlexDoc from './flex-doc.jsx';
import GridDoc from './grid-doc.jsx';
import ImgDoc from './img-doc.jsx';
import ImgGalleryDoc from './img-gallery-doc.jsx';
import ListDoc from './list-doc.jsx';
// import NavDoc from './nav-doc.jsx';
import NoteDoc from './note-doc.jsx';
import OverlayDoc from './overlay-doc.jsx';
import PanelDoc from './panel-doc.jsx';
import TableDoc from './table-doc.jsx';
import TextDoc from './text-doc.jsx';
import ThumbnailDoc from './thumbnail-doc.jsx';

const ContentView = (props) => (
  <div {...props} className={uikit.helpers.cleanClasses(props.classes)}>
    {props.children}
  </div>
);

ContentView.propTypes = {
  children: React.PropTypes.any,
  classes: React.PropTypes.array
};

const HeaderView = (props) => (
  <div {...props} className={uikit.helpers.cleanClasses(props.classes)}>
    <h1 style={{color: '#666666'}}>React UIkit Components</h1>
  </div>
);

HeaderView.propTypes = {
  children: React.PropTypes.any,
  classes: React.PropTypes.array
};


const Content = uikit.base(ContentView);
const Header = uikit.base(HeaderView);


const Layout = (props) => (
  <div>
    <div style={{background: '#0B100B'}}>
      <Header margin='bottom left right' />
    </div>
    <Grid >
      <Nav col='1-6' type='side'>
        <NavItem type='item'><Link to='/alert'>Alert</Link></NavItem>
        <NavItem type='item'><Link to='/article'>Article</Link></NavItem>
        <NavItem type='item'><Link to='/base'>Base</Link></NavItem>
        <NavItem type='item'><Link to='/badge'>Badge</Link></NavItem>
        <NavItem type='item'><Link to='/block'>Block</Link></NavItem>
        <NavItem type='item'><Link to='/button'>Button</Link></NavItem>
        <NavItem type='item'><Link to='/button-group'>Button group</Link></NavItem>
        <NavItem type='item'><Link to='/codeblock'>Codeblock</Link></NavItem>
        <NavItem type='item'><Link to='/comment'>Comment</Link></NavItem>
        <NavItem type='item'><Link to='/comment-list'>Comment list</Link></NavItem>
        <NavItem type='item'><Link to='/dropdown'>Dropdown</Link></NavItem>
        <NavItem type='item'><Link to='/flex'>Flex</Link></NavItem>
        <NavItem type='item'><Link to='/grid'>Grid</Link></NavItem>
        <NavItem type='item'><Link to='/img'>Img</Link></NavItem>
        <NavItem type='item'><Link to='/img-gallery'>Img gallery</Link></NavItem>
        <NavItem type='item'><Link to='/list'>List</Link></NavItem>
        <NavItem type='item'><Link to='/note'>Note</Link></NavItem>
        <NavItem type='item'><Link to='/overlay'>Overlay</Link></NavItem>
        <NavItem type='item'><Link to='/panel'>Panel</Link></NavItem>
        <NavItem type='item'><Link to='/table'>Table</Link></NavItem>
        <NavItem type='item'><Link to='/text'>Text</Link></NavItem>
        <NavItem type='item'><Link to='/thumbnail'>Thumbnail</Link></NavItem>
      </Nav>

      <Content col='5-6' margin='right'>{props.children}</Content>
    </Grid>
  </div>
);

Layout.propTypes = {
  children : React.PropTypes.any
};


const routes = {
  path: '/',
  component: Layout,
  childRoutes: [
    { path: '/alert', component        : AlertDoc },
    { path: '/article', component      : ArticleDoc },
    { path: '/base', component         : BaseDoc },
    { path: '/badge', component        : BadgeDoc },
    { path: '/block', component        : BlockDoc },
    { path: '/button', component       : ButtonDoc },
    { path: '/button-group', component : ButtonGroupDoc },
    { path: '/codeblock', component    : CodeblockDoc },
    { path: '/comment', component      : CommentDoc },
    { path: '/comment-list', component : CommentListDoc },
    { path: '/dropdown', component     : DropdownDoc },
    { path: '/flex', component         : FlexDoc },
    { path: '/grid', component         : GridDoc },
    { path: '/img', component          : ImgDoc },
    { path: '/img-gallery', component  : ImgGalleryDoc },
    { path: '/list', component         : ListDoc },
    { path: '/note', component         : NoteDoc },
    { path: '/overlay', component      : OverlayDoc },
    { path: '/panel', component        : PanelDoc },
    { path: '/table', component        : TableDoc },
    { path: '/text', component         : TextDoc },
    { path: '/thumbnail', component    : ThumbnailDoc }
  ]
};

export default routes;


// <Nav col='1-6' type='side'>
//   <NavItem type='item'><Link to='/alert'>Alert</Link></NavItem>
//   <NavItem type='item'><Link to='/article'>Article</Link></NavItem>
//   <NavItem type='item'><Link to='/base'>Base</Link></NavItem>
//   <NavItem type='item'><Link to='/badge'>Badge</Link></NavItem>
//   <NavItem type='item'><Link to='/block'>Block</Link></NavItem>
//   <NavItem type='item'><Link to='/button-group'>Button group</Link></NavItem>
//   <NavItem type='item'><Link to='/button'>Button</Link></NavItem>
//   <NavItem type='item'><Link to='/codeblock'>Codeblock</Link></NavItem>
//   <NavItem type='item'><Link to='/comment'>Comment</Link></NavItem>
//   <NavItem type='item'><Link to='/comment-list'>Comment list</Link></NavItem>
//   <NavItem type='item'><Link to='/flex'>Flex</Link></NavItem>
//   <NavItem type='item'><Link to='/grid'>Grid</Link></NavItem>
//   <NavItem type='item'><Link to='/img'>Img</Link></NavItem>
//   <NavItem type='item'><Link to='/img-gallery'>Img gallery</Link></NavItem>
//   <NavItem type='item'><Link to='/list-group'>List group</Link></NavItem>
//   <NavItem type='item'><Link to='/modal'>Modal</Link></NavItem>
//   <NavItem type='item'><Link to='/overlay'>Overlay</Link></NavItem>
//   <NavItem type='item'><Link to='/nav'>Nav</Link></NavItem>
//   <NavItem type='item'><Link to='/note'>note</Link></NavItem>
//   <NavItem type='item'><Link to='/panel'>Panel</Link></NavItem>
//   <NavItem type='item'><Link to='/table'>Tabl</Link></NavItem>
//   <NavItem type='item'><Link to='/text'>Text</Link></NavItem>
//   <NavItem type='item'><Link to='/thumbnail'>Thumbnail</Link></NavItem>
// </Nav>
