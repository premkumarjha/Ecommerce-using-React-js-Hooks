import React, { Component } from 'react';

export function Login(){


    const people = [
        { name: 'chris' },
        { name: 'nick' }
      ];
    
      return (
        <div>
          {people.map(person => (
            <p>{person.name}</p>
          ))}
        </div>
      );

}