export const arrayBuffer2string = (
  buffer: ArrayBuffer | Uint8Array
): string => {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)));
};

export const string2arrayBuffer = (str: string): ArrayBuffer => {
  return Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
};

export const decrypt_note = async (
  key: string,
  encrypted_metadata?: string,
  encrypted_content?: string
): Promise<string | null> => {
  const dec = new TextDecoder();

  let content = null;
  if (encrypted_content) {
    //const iv_content = string2arrayBuffer(key.iv_content);
    //content = await window.crypto.subtle.decrypt(
    //  {
    //    name: 'AES-GCM',
    //    iv: iv_content,
    //  },
    //  note_key?.key,
    //  string2arrayBuffer(encrypted_content)
    //);
  }

  return 'TODO';
};
