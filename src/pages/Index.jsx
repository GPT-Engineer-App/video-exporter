// Complete the Index page component here
// Use chakra-ui and react-icons for UI components
import { useState } from "react";
import { Box, Button, Container, Heading, Input, Text, VStack, Image, Textarea, Select, useToast } from "@chakra-ui/react";
import { FaUpload, FaFileDownload } from "react-icons/fa";

const Index = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoData, setVideoData] = useState(null);
  const toast = useToast();

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const fetchVideoData = async () => {
    // Simulated fetch function
    // In a real scenario, you would use an API to fetch video details
    const simulatedResponse = {
      title: "Example Video Title",
      thumbnail: "https://images.unsplash.com/photo-1541877944-ac82a091518a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwdmlkZW8lMjB0aHVtYm5haWx8ZW58MHx8fHwxNzE0MjgyODE3fDA&ixlib=rb-4.0.3&q=80&w=1080",
      transcript: "This is a simulated transcript of the video. It contains details about the video content.",
    };
    setVideoData(simulatedResponse);
    toast({
      title: "Video data fetched successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleExport = (format) => {
    // Simulated export function
    toast({
      title: `Exported as ${format.toUpperCase()}`,
      description: "Your file has been prepared and downloaded.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          YouTube Video Downloader
        </Heading>
        <Box>
          <Input placeholder="Enter YouTube video URL" value={videoUrl} onChange={handleVideoUrlChange} />
          <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={fetchVideoData} mt={2}>
            Fetch Video
          </Button>
        </Box>
        {videoData && (
          <>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h2" size="md">
                {videoData.title}
              </Heading>
              <Image src={videoData.thumbnail} alt="Video Thumbnail" />
              <Text mt={2}>{videoData.transcript}</Text>
            </Box>
            <Box>
              <Select placeholder="Select export format" onChange={(e) => handleExport(e.target.value)}>
                <option value="word">Word</option>
                <option value="text">Text</option>
                <option value="pdf">PDF</option>
              </Select>
            </Box>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
