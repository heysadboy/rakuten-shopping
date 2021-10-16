import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  emails = [
    {
      title: "New Email Received",
      body: "Would love to hear about your case for the platform. This is a sample body.",
      date: "April 15 - 3:25 PM",
      deleted: false,
      selected: false,
      flaged: false
    },
    {
      title: "New Email Received",
      body: "Would love to hear about your case for the platform. This is a sample body.",
      date: "April 15 - 3:25 PM",
      deleted: false,
      selected: false,
      flaged: false
    },
    {
      title: "New Email Received",
      body: "Would love to hear about your case for the platform. This is a sample body.",
      date: "April 15 - 3:25 PM",
      deleted: false,
      selected: false,
      flaged: false
    },
    {
      title: "New Email Received",
      body: "Would love to hear about your case for the platform. This is a sample body.",
      date: "April 15 - 3:25 PM",
      deleted: false,
      selected: false,
      flaged: false
    },
    {
      title: "New Email Received",
      body: "Would love to hear about your case for the platform. This is a sample body.",
      date: "April 15 - 3:25 PM",
      deleted: false,
      selected: false,
      flaged: false
    },
    {
      title: "New Email Received",
      body: "Would love to hear about your case for the platform. This is a sample body.",
      date: "April 15 - 3:25 PM",
      deleted: false,
      selected: false,
      flaged: false
    },
    {
      title: "New Email Received",
      body: "Would love to hear about your case for the platform. This is a sample body.",
      date: "April 15 - 3:25 PM",
      deleted: false,
      selected: false,
      flaged: false
    },
    {
      title: "New Email Received",
      body: "Would love to hear about your case for the platform. This is a sample body.",
      date: "April 15 - 3:25 PM",
      deleted: false,
      selected: false,
      flaged: false
    },
    {
      title: "New Email Received",
      body: "Would love to hear about your case for the platform. This is a sample body.",
      date: "April 15 - 3:25 PM",
      deleted: false,
      selected: false,
      flaged: false
    }
  ]

  setDeleted() {
    this.emails.map((email) => {
      if (email.selected)
        email.deleted = true;
      return email;
    })
  }

  setFlagged() {
    this.emails.map((email) => {
      if (email.selected)
        email.flaged = true;
      return email;
    })
  }

  getStyle(email: any) {
    if (email.deleted) {
      return {
        "display": "none",
      }
    }

    if (email.flaged) {
      return {
        "color": "#ff4081",
        "background-color": "#fff1f6"
      }
    }
    else {
      return null;
    }
  }

}
