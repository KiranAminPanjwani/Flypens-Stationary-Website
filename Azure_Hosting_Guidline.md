![image](https://user-images.githubusercontent.com/90326051/189549516-7e6e7c59-13fe-414b-8d83-752ff9015bd2.png)


<h3> Note: </h3>
There are 2 ways to host your website using Azure Static Web Apps Service.


# <img src="https://img.icons8.com/plasticine/100/000000/react.png" width="35px"/>Guidlines:

<h2>👉Technique # 1:</h2>

- First, ensure that your repository has been created and that your code has been pushed to GitHub's **Main branch**.
- As a second step, go to <ins>[Azure.com](https://azure.microsoft.com/en-us/)</ins>
- <b><ins>Sign In</ins></b> with your credentials
- Select "<b>Static Web Apps</b>" <ins>icon</ins>

<kbd>![image](https://user-images.githubusercontent.com/90326051/191842629-815dae72-e20e-4d3b-a07e-4c4040d37238.png)</kbd>

- And select "**+ Create**" option.

<kbd>![image](https://user-images.githubusercontent.com/90326051/191844354-32970dc0-926a-470a-a32c-148c4e84ae30.png)</kbd>

- Enter your <ins>Static Web App's</ins> **Name**:

<kbd>![image](https://user-images.githubusercontent.com/90326051/191844812-99983a99-9e7f-441a-8a47-765a8989b953.png)
</kbd>

- Select your nearest **Region** from the drop down and authorize it with your **Github Account**.

<kbd>![image](https://user-images.githubusercontent.com/90326051/191845232-45a5f55e-f98d-44a4-94d9-1812e1a3edcb.png)</kbd>

- Then enter your "<b><ins>GitHub Username</ins></b>" to the "<ins>Organization</ins>"
- Choose your "<b><ins>Repository name</ins></b>" from the drop down menu.
- Select your "<b><ins>branch</ins></b>".
- And nput your <ins>**Build Details**</ins> by selecting <ins>**Build Presets**</ins> from the dropdown menu.

<kbd>![image](https://user-images.githubusercontent.com/90326051/191845854-dd0ecf53-75ac-4a6e-8c6e-f3945cfceeee.png)</kbd>

- Finally, hit <ins>"**Review & Create**"</ins> button to start deployment.✨


</br> </br> </br>

<h2>👉Technique # 2:</h2>

- First, ensure that your repository has been created and that your code has been pushed to GitHub's **Master branch**.
- As a second step, go to <ins>[Azure.com](https://azure.microsoft.com/en-us/)</ins>
- <b><ins>Sign In</ins></b> with your credentials
- Select "<b>Create a Resource</b>" </br>

 <kbd>![image](https://user-images.githubusercontent.com/90326051/189541372-fec0d261-222e-48c3-a787-b9cb1a0617d5.png)</kbd>

- Search "<b>Web App</b>" in the Search bar </br> <kbd>![image](https://user-images.githubusercontent.com/90326051/189541488-7c9e35ca-5f77-4135-b301-3baeb8605777.png)</kbd>

<kbd>![image](https://user-images.githubusercontent.com/90326051/189541550-9180d8f3-84bb-45fd-b949-c40fb5575397.png)<kbd>
 <br> 
  - You will find the "<b>Web App</b>" like this: </br> 
  <kbd>![image](https://user-images.githubusercontent.com/90326051/189541945-f44d1f9b-49fc-40a7-8033-2d32049e0d6c.png)</kbd>
  
  - Select "<b>Create</b>" option.
  - And you will be redirected to a page like this:
  <kbd>![image](https://user-images.githubusercontent.com/90326051/189542068-61b722a6-3987-4503-a8ce-e6d65f2f03c0.png)
</kbd>
  
  - Select your preferable <ins>Subscription</ins> from the <b>drop down</b> menu:
  <kbd>![image](https://user-images.githubusercontent.com/90326051/189542150-9618c4fd-f2e3-440e-a757-1e060d83479d.png)</kbd>
  
  - Give a <b>new name</b> to your <ins>Resource Group</ins> according to your project/website: 
  <kbd>![image](https://user-images.githubusercontent.com/90326051/189542215-22023e80-7b87-4305-952f-7df3007642f5.png)</kbd>
  
  - Add a <b>name</b> here, according to your project:
  <kbd>![image](https://user-images.githubusercontent.com/90326051/189542465-c5a9460b-5519-445e-9308-ec75deaee9fd.png)
</kbd>
  Like this:
  
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189542507-3cd614dd-60f0-47dc-bb0f-92b5ac8f6e10.png)
</kbd>
  
  - Then select <ins><b>Node 16 LTS</b></ins> for the <ins>Runtime Stack</ins>
  - Choose <ins><b>Windows</b></ins> for <ins>Operating System</ins>, if you are a Windows user.
  - And choose the nearest <ins>Region</ins> around you from the drop down menu.
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189542773-96cab9a7-34d1-4d59-b510-dd5fa8107767.png)
</kbd>
  - Now, you can give <b>any name</b> to your <ins>Plan</ins>. But, make sure that it is <b><ins>"Free F1"</ins></b>. Here, I'm using te default one! 
  
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189542793-e6056d61-af89-448c-bd28-a1f4aa4e854c.png)
</kbd>
   
  - Go to the "<b><ins>Deployment</ins></b>" tab and <ins>Enable</ins>  the options:
  
  <kbd>![image](https://user-images.githubusercontent.com/90326051/189543527-bdf1cf26-8a16-4305-b7b3-c1def8c6e81c.png)
</kbd>
  
  - Ten "<ins>Sign In with and Authorize</ins>" with your <b>Github Account</b>. Like this:
  
  <kbd>![image](https://user-images.githubusercontent.com/90326051/189543568-4dcf026b-a138-4171-ac1f-9849d8f4a0ce.png)
</kbd>
  
  - Then enter your "<b><ins>GitHub Username</ins></b>" to the "<ins>Organization</ins>"
  - Choose your "<b><ins>Repository name</ins></b>" from the drop down menu.
  - Select your "<b><ins>branch</ins></b>".
  
  <kbd>![image](https://user-images.githubusercontent.com/90326051/189543641-0735e944-a47d-426f-b573-e6f891974efb.png)
</kbd>
  
  - Now, go to the "<b><ins>Tag</b></ins>" tab and enter a "<ins>Value name</ins>" according to your Project. Like this:
  
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189543131-cef5302c-1fc1-4e5c-acbf-1ec1ba60e920.png)
</kbd>
  
  - Then Hit <b><ins>"Review + Create"</ins></b> from the bottom:
  
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189543189-00517404-759c-42e2-92f1-cf5a413b3f04.png)
</kbd>
  
  - Recheck the Details and hit "<b><ins>Create</ins></b>":
  
    <kbd>![image](https://user-images.githubusercontent.com/90326051/189543218-e64c63de-d906-4b46-8dd1-2d66b5d30afe.png)
</kbd>
  
  - Then it will take some time and start **Deployment**
 <kbd>![image](https://user-images.githubusercontent.com/90326051/189546301-86bdab34-e1b2-4211-80de-e6b2107ec254.png)
 </kbd>
 
  -Once Deployment is completed... 
 - Select <b><ins>Go to Resources</ins></b> button...
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189546327-f73d64c7-a79b-4fed-9397-330229be02ad.png)
</kbd>
 
 - You will be redirect to a page like this:
 
    <kbd>![image](https://user-images.githubusercontent.com/90326051/189546257-310370dd-09bb-4d76-a149-c7ed6bfbede2.png)
</kbd>
 
 - Then check your "<b><ins>GitHub Repository</ins></b>", you will find one action <ins>**In Progress**</ins>
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189546364-1d08d50f-d961-4cb0-a0cf-872dd6740790.png)
</kbd>
 
 <kbd>![image](https://user-images.githubusercontent.com/90326051/189546552-99768b39-e827-4baa-84f3-af5f2c84deac.png)
</kbd>
 
 - Then go to the <ins>**Actions**</ins> tab and select the running <ins>**Workflow**</ins>.
   
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189546620-0e8653ee-cfae-49c7-9c6c-bc27b4154160.png)
</kbd>
 
 - This workflow process will consume enormous amount of time! To reduce the time consumption, we need to modify the workflow file. For that, we will **cancel** the current Workflow :
 
    <kbd>![image](https://user-images.githubusercontent.com/90326051/189546811-06c8743f-3996-4338-9b96-f219b67a8da1.png)
</kbd>
 
 - After cancelling the workflow, select "<ins>**View workflow file**</ins>" option from the top right corner:
 
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189546886-523df212-870c-4d94-870e-44c8027f9e9f.png)
</kbd>
 
 - Then start editing the file using **Pen icon**:
 
    <kbd>![image](https://user-images.githubusercontent.com/90326051/189546925-0f65d366-7010-4631-ba04-31006947603d.png)
</kbd>
 
 - Scroll down to this section of your code and add a **comment** : "<ins>**Zip the build directory**</ins>"
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189547010-7384f920-2a20-47af-bc53-d1abcf58d082.png)
</kbd>
 
 <kbd>![image](https://user-images.githubusercontent.com/90326051/189547045-941af18c-4cf2-49d4-983f-5f4c9da94f00.png)
</kbd>
 
 - Then search "<ins>**zip**</ins>" in the side search bar and select "<ins>**Zip Release**</ins>".
 
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189547132-64663307-13f9-4bf6-81ec-e4e491dabdc0.png)
</kbd>
 
 - Copy the code like this and paste it below your comment.
 <kbd>![image](https://user-images.githubusercontent.com/90326051/189547219-f1a4020f-dac0-4c8f-acd9-f408cfef693e.png)
</kbd>
 
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189547296-7910df1f-a8ca-4c33-92e5-5f596b3ca60c.png)
</kbd>
 
 - Then **remove** the select unnecessary code, like this:
 
 <kbd>![image](https://user-images.githubusercontent.com/90326051/189547332-c64dff48-883c-4168-84ee-6b1fef4532af.png)
</kbd>
 
 - Then select and modify the **path**, like this:
 
| Original | Modified | 
| ------------- | ------------- | 
| <kbd>![image](https://user-images.githubusercontent.com/90326051/189547424-2df984ef-3391-4d13-aa06-9fcd3da3b9c6.png)</kbd> | <kbd>![image](https://user-images.githubusercontent.com/90326051/189547463-69689ef7-3523-4a05-8db6-fe1ae29db297.png)
</kbd>| 

 - Then select and modify the **filename**, like this:
 
| Original | Modified | 
| ------------- | ------------- | 
| <kbd>![image](https://user-images.githubusercontent.com/90326051/189547694-337c526e-3898-403b-ac3c-c38319cf2112.png)</kbd> | <kbd>![image](https://user-images.githubusercontent.com/90326051/189547707-41898a92-9322-45ab-8f0a-07a2f58f7f03.png)
</kbd>|  
 
 - It will finally look like this:
 
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189547738-b300598c-375a-445b-a4da-a3aa079e3dc6.png)
</kbd>

- Scroll down your code a bit, modify the **path** and write <ins>**release.zip**</ins>, like this:
 
| Original | Modified | 
| ------------- | ------------- | 
| <kbd>![image](https://user-images.githubusercontent.com/90326051/189547834-cfb9db63-05ee-4758-aaf9-fa565925e550.png)</kbd> | <kbd>![image](https://user-images.githubusercontent.com/90326051/189547873-7a05bb82-b4c0-4198-afb0-c518624ae023.png)
</kbd>|  

 - Scroll down a bit more, modify the **package** and write <ins>**release.zip**</ins>, like this:
 
| Original | Modified | 
| ------------- | ------------- | 
| <kbd>![image](https://user-images.githubusercontent.com/90326051/189547958-3f4c8f1c-c57f-4b42-b528-36e94207dc69.png)</kbd> | <kbd>![image](https://user-images.githubusercontent.com/90326051/189548000-644d08ce-9a2c-4f38-80eb-adc6de2afef1.png)
</kbd>| 
  
 - Then, hit "<ins>**Start Commit**</ins>" button and **Commit Changes**.
 
   <kbd>![image](https://user-images.githubusercontent.com/90326051/189548098-0184f897-bf50-4401-8254-73c3f9fa2f1a.png)
</kbd>
 
 - Now, go to the "<b><ins>Actions</ins></b>" tab and check.
 - It will take few minutes to complete the deployment.
 
  <kbd>![image](https://user-images.githubusercontent.com/90326051/189548232-ecd8301f-be46-42c9-aae1-25b00b6d59bb.png)
</kbd>

   <kbd>![image](https://user-images.githubusercontent.com/90326051/189548269-919fe5fc-ca2e-418a-b52a-09071cca4cf9.png)
</kbd>
 
 - Onece the deployment is completed, Go back to your Azure account, **and copy/open your <ins>URL</ins>** to the new tab
 
 <kbd>![image](https://user-images.githubusercontent.com/90326051/189548354-c5df099b-1cb5-4c73-973a-9327ddc72a24.png)
</kbd>
 
 - <b>Finally, your website is Hosted! Congratulation!!!</b>🎉
 
 <kbd>![image](https://user-images.githubusercontent.com/90326051/189548390-c4c5b59a-b7ef-44de-acbe-ce4a276f005e.png)
</kbd>
 

