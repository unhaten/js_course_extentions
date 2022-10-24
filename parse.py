import requests
from bs4 import BeautifulSoup as BS
import soupsieve as sv

r = requests.get("https://russian.rt.com/business/news")

html = BS(r.text, 'lxml')

all_links = html.find_all('a', class_='link link_color')
print(all_links)
for link in all_links:
    # print(f'{link['href']} --- {link.text}')
    print('https://russian.rt.com' + link['href'] + ' ---------- ' + link.text)

# for el in sv.select(".layout a[class='link > link_color']", html):
#     print(el)
    # title = el.select(".caption caption-bold > a")
    # print(title[0].text)
    # print(title)

# print(html.select('.layout a'))
# caption caption-bold
# layout__wrapper layout__wrapper_main

#!! ----------------------------------------------------------------------------

# from bs4 import BeautifulSoup
# import soupsieve as sv

# soup = BeautifulSoup('<a></b></a>', 'lxml')
# print(soup)

# with open('NiceAdmin/index.html', 'r') as f:
#     soup = BeautifulSoup(f, 'lxml')

# links = soup.select_one('nav', calss_='header_nav').select('a')
# print(links)

# links = sv.select('nav a', soup)
# print(links)

# el = soup.find('table', class_='table').find_parent()

# print(el)


# title = soup.title
# print(title)
# print(title.name)
# print(title.attrs)
# print(title.text)
# print(title.get_text())
# print(title.string)

# div = soup.div
# print(div.get('class'))
# print(div.has_attr('id'))
# print(div.text.strip())
# print(div.get_text(strip=True, separator='|'))

# print(soup.find_all('a'))
# print(soup.find('a').text.strip())

# links = soup.find_all('a')
# print(len(links))

# print(soup.find('nav').find('a').get('href'))

# links = soup.find('nav').find_all('a')

# for link in links:
#     print(f"{link.get_text(strip=True)} - {link.get('href')}")

# links = soup.find('nav').find_all('a', {'class': 'nav-link nav-icon'})
# print(links)

