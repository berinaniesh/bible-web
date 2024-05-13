import xml.etree.ElementTree as ET
import datetime
import requests

def create_sitemap(urls):
    # Create the root element
    root = ET.Element("urlset")
    root.set("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9")

    # Add each URL to the sitemap
    for url in urls:
        url_element = ET.SubElement(root, "url")
        loc_element = ET.SubElement(url_element, "loc")
        loc_element.text = url
        lastmod_element = ET.SubElement(url_element, "lastmod")
        lastmod_element.text = datetime.datetime.now().isoformat()

    # Create the tree and write it to a file
    tree = ET.ElementTree(root)
    tree.write("static/sitemap.xml", encoding="UTF-8", xml_declaration=True)

# Example URLs (replace these with your actual URLs)
fixed_pages = ["about", "help", "changelog"]

urls = []
for p in fixed_pages:
    urls.append(f"https://bible.berinaniesh.xyz/{p}")

translations = ["TOVBSI", "KJV", "MLSVP", "ASV", "WEB"]
chaptercount = requests.get("https://api.bible.berinaniesh.xyz/chaptercount").json()

for translation in translations:
    urls.append(f"https://bible.berinaniesh.xyz/{translation}")
    for chapter in chaptercount:
        book_name = chapter['book'].replace(" ", "-")
        urls.append(f"https://bible.berinaniesh.xyz/{translation}/{book_name}")
        chapters = chapter['chapters']
        for i in range(chapters):
            urls.append(f"https://bible.berinaniesh.xyz/{translation}/{book_name}/{i+1}")


create_sitemap(urls)

