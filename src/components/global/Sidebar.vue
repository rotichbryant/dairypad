<template>
<CSidebar position="fixed">
  <CSidebarHeader class="border-bottom">
    <CSidebarBrand>CoreUI</CSidebarBrand>
  </CSidebarHeader>
  <CSidebarNav>
    <CNavItem href="/">
      <CIcon customClassName="nav-icon" icon="cil-speedometer"/> Overview
    </CNavItem>
    <CNavTitle>Data Management</CNavTitle>
    <CNavItem  href="/">
      <CIcon  customClassName="nav-icon" icon="cil-group"/> Clients
    </CNavItem>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-list"/> Posting Categorization
      </template>
      <CNavItem  href="/">
        <CIcon  customClassName="nav-icon" /> Categories
      </CNavItem>
      <CNavItem href="/">
        <CIcon  customClassName="nav-icon" /> Sub Categories
      </CNavItem>
      <CNavItem href="/">
        <CIcon  customClassName="nav-icon" /> Child Sub Categories
      </CNavItem>      
    </CNavGroup>    
    <CNavItem href="/">
      <CIcon  customClassName="nav-icon" icon="cil-applications"/> Postings
    </CNavItem>
    <CNavItem href="/">
      <CIcon  customClassName="nav-icon" icon="cil-user"/> Staff
    </CNavItem>
    <CNavItem href="/">
      <CIcon  customClassName="nav-icon" icon="cil-list"/> Subscriptions
    </CNavItem>
    <CNavItem href="/">
      <CIcon  customClassName="nav-icon" icon="cil-money"/> Transactions
    </CNavItem> 
    <CNavItem href="/">
      <CIcon  customClassName="nav-icon" icon="cil-bookmark"/> Advert Placements
    </CNavItem>        
    <CNavTitle>Support</CNavTitle>
    <CNavItem href="/">
      <CIcon  customClassName="nav-icon" icon="cil-bell"/> Notifications
    </CNavItem>
    <CNavItem href="/">
      <CIcon  customClassName="nav-icon" icon="cil-envelope-open"/> Chat
    </CNavItem>    
    <CNavTitle>Settings</CNavTitle>
    <CNavItem href="/">
      <CIcon  customClassName="nav-icon" icon="cil-user"/> Profile
    </CNavItem>
    <CNavItem href="/">
      <CIcon  customClassName="nav-icon" icon="cil-building"/> Company
    </CNavItem>
    <CNavItem href="/">
      <CIcon  customClassName="nav-icon" icon="cil-cog"/> System
    </CNavItem>
  </CSidebarNav>
  <CSidebarFooter class="border-top">
    <CSidebarToggler/>
  </CSidebarFooter>
</CSidebar>
</template>
<script setup>
// import { RouterLink } from 'vue-router'

// import { logo } from '@/assets/brand/logo'
// import { sygnet } from '@/assets/brand/sygnet'
// import { AppSidebarNav } from '@/components/AppSidebarNav.js'
// import { useSidebarStore } from '@/stores/sidebar.js'

// const sidebar = useSidebarStore()
</script>
