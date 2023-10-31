
pub fn verse(n: u32) -> String {
    if n>2 {
        format!("{} bottles of beer on the wall, {} bottles of beer.\nTake one down and pass it around, {} bottles of beer on the wall.\n", n, n, n-1
        )
    } else if n==2 {
        "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n".to_owned()
    } else if n==1 {
        "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n".to_owned()
    } else {
        "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n".to_owned()
    }
}

pub fn sing(start: u32, end: u32) -> String {
    let mut i = start;
    let mut verses = String::new();
    while i>=end {
        let new_verse = verse(i);
        verses = format!("{verses}{new_verse}\n");
        if i==0 { break; }
        i = i - 1;
    }

    verses.remove(verses.len() - 1);
    verses
}
