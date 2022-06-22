/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict
 */

'use strict';

type FormDataValue = string | {name?: string, type?: string, uri: string};
type FormDataPartInternal = [string, FormDataValue, string];

type Headers = {[name: string]: string, ...};
type FormDataPart =
  | {
      string: string,
      headers: Headers,
      ...
    }
  | {
      uri: string,
      headers: Headers,
      name?: string,
      type?: string,
      ...
    };

/**
 * Polyfill for XMLHttpRequest2 FormData API, allowing multipart POST requests
 * with mixed data (string, native files) to be submitted via XMLHttpRequest.
 *
 * Example:
 *
 *   var photo = {
 *     uri: uriFromCameraRoll,
 *     type: 'image/jpeg',
 *     name: 'photo.jpg',
 *   };
 *
 *   var body = new FormData();
 *   body.append('authToken', 'secret');
 *   body.append('photo', photo);
 *   body.append('title', 'A beautiful photo!');
 *
 *   xhr.open('POST', serverURL);
 *   xhr.send(body);
 */
class FormData {
  _parts: Array<FormDataPartInternal>;

  constructor() {
    this._parts = [];
  }

  append(key: string, value: FormDataValue, fileName: string) {
    // The XMLHttpRequest spec doesn't specify if duplicate keys are allowed.
    // MDN says that any new values should be appended to existing values.
    // In any case, major browsers allow duplicate keys, so that's what we'll do
    // too. They'll simply get appended as additional form data parts in the
    // request body, leaving the server to deal with them.
    this._parts.push([key, value, fileName]);
  }


  set(key: string, value: FormDataValue, fileName: string) {
    const newParts = [];
    let replaced = false;
 
    fileName = fileName || value.name || 'blob';
 
    this._parts.forEach((part) => {
      if (part[0] === key) {
        newParts.push([key, value, fileName]);
        replaced = true;
      } else {
        newParts.push(part);
      }
    });
 
    if (!replaced) {
      newParts.push([key, value, fileName]);
    }
 
    this._parts = newParts;
  }

  getParts(): Array<FormDataPart> {
    return this._parts.map(([name, value, fileName]) => {
      const contentDisposition = 'form-data; name="' + name + '"';

      const headers: Headers = {'content-disposition': contentDisposition};

      // The body part is a "blob", which in React Native just means
      // an object with a `uri` attribute. Optionally, it can also
      // have a `name` and `type` attribute to specify filename and
      // content type (cf. web Blob interface.)
      if (typeof value === 'object' && value) {
        headers['content-disposition'] += '; filename="' + fileName + '"';
        headers['content-type'] = value.type || 'application/octet-stream';

        const blob = {
          uri: value.uri,
          type: value.type,
          name: value.name,
        };

        if (value instanceof Blob) {
          blob.uri = URL.createObjectURL(value);
         
        }
        return {
          ...blob,
          headers,
          fieldName: name
        };      
      }
      // Convert non-object values to strings as per FormData.append() spec
      return {string: String(value), headers, fieldName: name};
    });
  }
}

module.exports = FormData;
