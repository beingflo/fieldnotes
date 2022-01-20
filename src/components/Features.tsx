import React from 'react';
import '../style.css';

const Features = (): React.ReactElement => {
  return (
    <div className="bg-[#9EAA9D] mt-12">
      <span className="absolute font-bold p-2 text-white bg-black">
        features
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 p-24">
        <div>
          <div className="text-4xl font-semibold">Write in confidence</div>
          <div className="pt-4">
            Fieldnotes is end-to-end encrypted. Nothing you write can be
            observed by us or anyone else. Even when sharing your notes, only
            the recipient of the share link can see your content.
            <a
              className="pl-1 underline"
              href="https://fieldnotes.land/note/z4o6cWma51VDQZbZnxQdi1GC3XppEYSA#yL1CGPz79huSP4F8T7uDp2lydtkTasO5cGijh9QOyhs="
            >
              Learn more about our encryption
            </a>
          </div>
        </div>
        <div>
          <div className="text-4xl font-semibold">
            Keep it simple with markdown
          </div>
          <div className="pt-4">
            To get out of the way of your writing, fieldnotes boasts a clean and
            minimalist design. In this vein it allows formatting your note
            easily with markdown.
            <a
              className="pl-1 underline"
              href="https://fieldnotes.land/note/gqxavvFRZheChSn8QC5wC5HiglrXNlDJ#rfRLCH4p4F+cBRk5fYIBKZX0KY7LP3tAHum+01o7ke0="
            >
              See an example of markdown in action
            </a>
          </div>
        </div>
        <div>
          <div className="text-4xl font-semibold">Own your data</div>
          <div className="pt-4">
            With fieldnotes you don't have to worry about your data being locked
            in. You can setup realtime sync to your own storage provider to
            always be in control.
            <a
              className="pl-1 underline"
              href="https://fieldnotes.land/note/zYb24v4lSMk6PUhjEkBO8kFD0D8naKWt#vzd1Horihoi24KqE8EAFTEh6eYT9MDZ1B7K/Z+bzs8s="
            >
              Learn more about this feature
            </a>
          </div>
        </div>
        <div>
          <div className="text-4xl font-semibold">Share your knowledge</div>
          <div className="pt-4">
            Whether it's a technical writeup or that recipe from your grandma,
            sharing is caring. With fieldnotes you can simply publish your notes
            and they become visible to the world. On your feed all of your
            published notes are neatly organized.
            <a
              className="pl-1 underline"
              href="https://fieldnotes.land/florian"
            >
              See the feed of the creator of fieldnotes for inspiration
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
