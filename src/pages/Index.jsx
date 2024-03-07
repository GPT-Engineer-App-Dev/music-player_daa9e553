import React from "react";
import { Box, VStack, HStack, Image, Text, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, useBoolean, Center } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  // Dummy data for the current playing song
  const song = {
    title: "Song Title",
    artist: "Artist Name",
    album: "Album Name",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTcwOTgwNTA1Mnww&ixlib=rb-4.0.3&q=80&w=1080",
    duration: 240, // in seconds
  };

  // Hooks to manage the play state and current time of the song
  const [isPlaying, setIsPlaying] = useBoolean();
  const [currentTime, setCurrentTime] = React.useState(0);

  // Function to toggle play/pause
  const togglePlay = () => {
    setIsPlaying.toggle();
    // Dummy implementation, in a real app this would control audio playback
  };

  // Function to handle slider change
  const handleSliderChange = (value) => {
    setCurrentTime(value);
    // Dummy implementation, in a real app this would seek the audio to the correct position
  };

  // Function to format time in seconds to MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <Center h="100vh" p={10}>
      <VStack spacing={4} align="center">
        <Image boxSize="200px" src={song.cover} alt="Album cover" borderRadius="md" />
        <VStack>
          <Text fontSize="2xl" fontWeight="bold">
            {song.title}
          </Text>
          <Text fontSize="lg" color="gray.600">
            {song.artist}
          </Text>
        </VStack>
        <HStack w="full" justify="center">
          <IconButton aria-label="Previous song" icon={<FaBackward />} isRound />
          <IconButton aria-label={isPlaying ? "Pause" : "Play"} icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={togglePlay} isRound size="lg" />
          <IconButton aria-label="Next song" icon={<FaForward />} isRound />
        </HStack>
        <Box w="full" py={2}>
          <Slider value={currentTime} min={0} max={song.duration} onChange={handleSliderChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <HStack w="full" justify="space-between">
          <Text fontSize="sm" color="gray.600">
            {formatTime(currentTime)}
          </Text>
          <Text fontSize="sm" color="gray.600">
            {formatTime(song.duration)}
          </Text>
        </HStack>
      </VStack>
    </Center>
  );
};

export default Index;
